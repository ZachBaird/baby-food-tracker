const express = require('express');
const dotenv = require('dotenv').config();
const { errorHandler } = require('./middleware/errorMiddleware');
const port = process.env.PORT || 5000;

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(errorHandler);

// Routing
app.use('/api/foodentries', require('./routes/foodEntryRoutes'));

app.listen(port, () => console.log(`Server started on port ${port}`));
