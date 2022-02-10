const express = require('express');
const router = express.Router();
const {
  getFoodEntries,
  createFoodEntry,
  updateFoodEntry,
  deleteFoodEntry, } = require('../controllers/foodEntryController');
const { protectRoute } = require('../middleware/authMiddleware');

router.route('/:babyId')
  .get(protectRoute, getFoodEntries)
  .post(protectRoute, createFoodEntry);
router.route('/:babyId/:id')
  .put(protectRoute, updateFoodEntry)
  .delete(protectRoute, deleteFoodEntry);

module.exports = router;
