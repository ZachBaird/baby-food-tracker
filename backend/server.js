const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv').config();
const { errorHandler } = require('./middleware/errorMiddleware');
const colors = require('colors');
const connectDb = require('./config/db');
const port = process.env.PORT || 5000;

// Init db connection
connectDb();

const app = express();

const allowedOrigins = [
  'https://oreo-baby-food-tracker.netlify.app',
  'http://localhost:3000',
];

const corsOptions = {
  origin: (origin, callback) => {
    if (allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
};

app.use(cors(corsOptions));


// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routing
app.use('/api/babies', require('./routes/babyRoutes'));
app.use('/api/foodentries', require('./routes/foodEntryRoutes'));
app.use('/api/users', require('./routes/userRoutes'));

// Post-routing middleware
app.use(errorHandler);

app.listen(port, () => console.log(`Server started on port ${port}`));
