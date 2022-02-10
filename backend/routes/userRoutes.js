const express = require('express');
const router = express.Router();
const {
  registerUser,
  loginUser,
  getCurrentUserData,
} = require('../controllers/userController');
const { protectRoute } = require('../middleware/authMiddleware');

router.post('/', registerUser);
router.post('/login', loginUser);
router.get('/me', protectRoute, getCurrentUserData);

module.exports = router;
