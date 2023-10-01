const express = require('express');
const router = express.Router();

let transactions = [];

router.post('/add', (req, res) => {
  const { payer, points, timestamp } = req.body;

  if (!payer || typeof points === 'undefined' || !timestamp) return res.status(400).send('Bad Request: Missing Required Fields');

  transactions.push({ payer, points, timestamp });
  res.status(200).send();
});

router.post('/spend', (req, res) => {
  const { points } = req.body;

  if (!points) return res.status(400).send('Bad Request: Missing Points');

  let pointsToSpend = points;
  let response = [];

  transactions.sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp));

  for (let transaction of transactions) {
      if (pointsToSpend <= 0) break;

      // If the transaction has negative points, adjust pointsToSpend and response accordingly
      if (transaction.points < 0) {
          const absPoints = Math.abs(transaction.points);
          pointsToSpend += absPoints; // Adding the absolute value of negative points back to pointsToSpend.

          // Adjusting the payer's points value in the response array.
          const index = response.findIndex(r => r.payer === transaction.payer);
          if (index >= 0) {
              response[index].points += absPoints; // Adding because the points are negative.
          } else {
              response.push({ payer: transaction.payer, points: absPoints });
          }
          transaction.points = 0;
          // Continue to the next transaction as we have handled this transaction.
          continue;
      }

      // Calculate the number of points spent in the current transaction and adjust the remaining points.
      let pointsSpent = Math.min(transaction.points, pointsToSpend);
      transaction.points -= pointsSpent;
      pointsToSpend -= pointsSpent;

      // Update the response array with the points spent for each payer.
      const index = response.findIndex(r => r.payer === transaction.payer);
      if (index >= 0) {
          response[index].points -= pointsSpent;
      } else {
          response.push({ payer: transaction.payer, points: -pointsSpent });
      }
  }

  // If there are still points left to spend, return a 400 Bad Request response.
  if (pointsToSpend > 0) return res.status(400).send('Not enough points');

  // If all points are successfully spent, return a 200 OK response with the response array.
  res.status(200).json(response);
});


router.get('/balance', (req, res) => {
  let balance = {};

  transactions.forEach(transaction => {
    if (!balance[transaction.payer]) balance[transaction.payer] = 0;
    balance[transaction.payer] += transaction.points;
  });

  res.status(200).json(balance);
});

module.exports = router;