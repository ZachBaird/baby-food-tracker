const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/userModel');
const asyncHandler = require('express-async-handler');
const { createErrorResponse } = require('../utilities/createErrorResponse');

// Helper to generate JWT
const generateToken = (id) => jwt.sign({ id }, process.env.SECRET_KEY, { expiresIn: '7d' });

// @desc      Register a new user
// @mroute    POST /api/users
// @access    Public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password)
    createErrorResponse(res, 400, 'Missing required fields for user registration');

  const userExists = await User.findOne({ email });
  if (userExists)
    createErrorResponse(res, 400, 'Email already in use.');

  // Hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  
  // Create user
  const user = await User.create({
    name,
    email,
    password: hashedPassword,
  });

  if (user)
    res.status(201).json({
      id: user.id,
      name: user.name,
      email: user.email,
      token: generateToken(user.id),
    });
  else
    createErrorResponse(res, 400, 'Invalid user data.');
});

// @desc      Log in a user
// @route     POST /api/users/login
// @access    Public
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password)
    createErrorResponse(res, 400, 'Missing login data.');
  
  const user = await User.findOne({ email });
  if (!user)
    createErrorResponse(res, 400, 'User does not exist.');

  if (!await bcrypt.compare(password, user.password))
    createErrorResponse(res, 400, 'Password was invalid.');

  res.json({
    id: user.id,
    name: user.name,
    email: user.email,
    token: generateToken(user.id),
  });
});

// @desc      Get user data
// @route     GET /api/users/me
// @access    Private
const getCurrentUserData = asyncHandler(async (req, res) => {
  const { id, name, email } = await User.findById(req.user.id);

  res.status(200).json({
    id,
    name,
    email,
  });
});

module.exports = { registerUser, loginUser, getCurrentUserData };
