# Baby Food Tracker

This app was an idea from my wife. We just started giving our son baby foods. My wife lamented that there are no apps to track what foods a baby likes as they start out; I resolved to give her just the tool she'll need.

## Backend
### Setup

1. Have Node.js installed
2. Clone the repo
3. Cd into `baby-food-tracker`
4. Run `npm i`
5. Copy the `sample.env` and name it `.env` file in the project root
6. Setup a Mongo db
7. Populate the env variables in `.env`
8. Run `npm run server`
9. Try hitting some of the routes

### Routes & Testing

Within this repo root is a `postman_import.postman_collection`. Import this into your Postman instance and you will have all the routes you need to test with. However, I don't have any variables set up for storing the auth token or anything, so you will potentially have to manually copy your token around.

## Frontend

### Setup

1. `cd` into `baby-food-tracker/frontend`
2. Run `npm i`
3. Run `npm start`

## Deployment Notes

This app was written with the intent of hosting the backend on Heroku and the frontend on Netlify. The app is pushed to Heroku where the backend dependencies are brought in & the server is started. The frontend is built and deployed to Netlify.

Env configs are assigned via the Heroku CLI.

I will need to take some time and polish configurations/deployment. Until that time is invested, the process is simple, albeit manual and dirty.

## Todos

* Activate PWA capabilities
* Add logging
* Add tests
* Add filtering to foods list
* Fix new food entry form notes
* Add "baby hasn't tried" option to food detail
