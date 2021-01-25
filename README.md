# NodeJS Test

## How to run

* in the terminal run `npm run start-dev`, project should start on localhost:8080
* go to path /api/users to get started with get requests

## Features

* gets all creditor data
* gets total balance and average minPP for each creditor
* gets creditor data by creditor name
* adds new creditor entry
* updates existing creditor entries
* implements credit analysis to return data where balance > 2000.00 and minPP <||= 29.99
* utilizes NodeJS/Express and Sequelize/PSQL

## Test Locations

* Seed files for testing - /nodejs/script/seed.js
* Express Rest APIs - /nodejs/server/api/users.js
* Sequelize db models - /nodejs/server/db/models/user.js

## Video Walkthrough
