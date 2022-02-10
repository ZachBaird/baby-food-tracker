const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');
const { createErrorResponse } = require('../utilities/createErrorResponse');

const protectRoute = asyncHandler(async (req, res, next) => {
  let token;

  if (req.headers.authorization && req.headers.authorization?.startsWith('Bearer')) {
    try {
      token = req.headers.authorization.split(' ')[1];

      const decodedData = jwt.verify(token, process.env.SECRET_KEY);
      // Don't include password.
      req.user = await User.findById(decodedData.id).select('-password');

      next();
    } catch (error) {
      console.log(error);
      createErrorResponse(res, 401, 'Not authorized.');
    }
  }

  if (!token)
    createErrorResponse(res, 401, 'No token is present -> unauthorized.');
});

module.exports = { protectRoute };
