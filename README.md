# fetch-reward-backend
Part 1 Background

Our users have points in their accounts. Users only see a single balance in their account, but for reporting purposes, we track their points per payer. A payer is the producer of the item that points were added through. For example, a person who redeems yogurt may have points added through the payer DANNON. We track the payer from whom points are added, as well as when the points were added, so we know which payer to bill when the user spends their points on a reward.
You are being tasked with building a REST API that will help keep track of points and point transactions. Your API should be served on port 8000, and endpoints should accept and return JSON when required. The transactions that you will need to implement are: Adding points, Spending points, Fetching the current point balance
