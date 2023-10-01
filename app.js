const express = require('express');
const app = express();
const port = 8000;
const server = require('./server');

app.use(express.static('public'));
app.use(express.json()); 

app.use('/', server); 

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
