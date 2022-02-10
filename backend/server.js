const express = require('express');
const dotenv = require('dotenv').config();
const { errorHandler } = require('./middleware/errorMiddleware');
const colors = require('colors');
const connectDb = require('./config/db');
const port = process.env.PORT || 5000;

// Init db connection
connectDb();

const app = express();

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
