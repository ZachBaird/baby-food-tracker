# Baby Food Tracker

This app was an idea from my wife. We just started giving our son baby foods. My wife lamented that there are no apps to track what foods a baby likes as they start out; I resolved to give her just the tool she'll need.

## Setup

1. Have Node.js installed
2. Clone the repo
3. Cd into `baby-food-tracker`
4. Run `npm i`
5. Copy the `sample.env` and name it `.env` file in the project root
6. Setup a Mongo db
7. Populate the env variables in `.env`
8. Run `npm run server`
9. Try hitting some of the routes

## Routes & Testing

Within this repo root is a `postman_import.postman_collection`. Import this into your Postman instance and you will have all the routes you need to test with. However, I don't have any variables set up for storing the auth token or anything, so you will potentially have to manually copy your token around.

## Todos

* Start building out PWA UI
* Add logging
* Add tests