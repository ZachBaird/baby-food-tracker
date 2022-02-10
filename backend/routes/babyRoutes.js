const express = require('express');
const router = express.Router();
const {
  getBabies,
  createBaby,
  updateBaby,
  deleteBaby,
} = require('../controllers/babyController');
const { protectRoute } = require('../middleware/authMiddleware');

router.route('/')
  .get(protectRoute, getBabies)
  .post(protectRoute, createBaby);
router.route('/:id')
  .put(protectRoute, updateBaby)
  .delete(protectRoute, deleteBaby);

module.exports = router;
