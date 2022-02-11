const express = require('express');
const router = express.Router();
const {
  getFoodEntries,
  getFoodEntry,
  createFoodEntry,
  updateFoodEntry,
  deleteFoodEntry, } = require('../controllers/foodEntryController');
const { protectRoute } = require('../middleware/authMiddleware');

router.route('/:babyId')
  .get(protectRoute, getFoodEntries)
  .post(protectRoute, createFoodEntry);
router.route('/:babyId/:id')
  .get(protectRoute, getFoodEntry)
  .put(protectRoute, updateFoodEntry)
  .delete(protectRoute, deleteFoodEntry);

module.exports = router;
