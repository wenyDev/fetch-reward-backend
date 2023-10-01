# Part 1 Background
Our users have points in their accounts. Users only see a single balance in their account, but for reporting purposes, we track their points per payer. A payer is the producer of the item that points were added through. For example, a person who redeems yogurt may have points added through the payer DANNON. We track the payer from whom points are added, as well as when the points were added, so we know which payer to bill when the user spends their points on a reward.

# How to start it?
1. Install Node.js and NPM
  > A. Via installer: https://nodejs.org/en/download

  > B. Via package manager:https://nodejs.org/en/download/package-manager

2. Git clone this porject
   ```
   git clone https://github.com/wenyDev/fetch-reward-backend.git
   ```

3. Run it and check if it is runing by seeing "Listening on port 8000"
   ```
   npm app.js
   ```
# How to test it?

1. Open vs code
2. Download thunder client from vs code extension
3. Create new request to test add function 
<img width="1087" alt="Screenshot 2023-10-01 at 12 52 01 PM" src="https://github.com/wenyDev/fetch-reward-backend/assets/132880473/cdd92bd2-b944-4e3b-871d-f148f648a252">
4. Create new request to test spend function
<img width="1100" alt="Screenshot 2023-10-01 at 12 54 23 PM" src="https://github.com/wenyDev/fetch-reward-backend/assets/132880473/104887ba-710b-488c-97b9-c0d0e98c0487">
5. Create new request to test balance function
<img width="1097" alt="Screenshot 2023-10-01 at 12 54 53 PM" src="https://github.com/wenyDev/fetch-reward-backend/assets/132880473/6cc272ec-9c45-4ee6-b6c1-ed9015327912">
