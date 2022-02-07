const express = require('express');
const router = express.Router();
const {
  getFoodEntries,
  createFoodEntry,
  updateFoodEntry,
  deleteFoodEntry, } = require('../controllers/foodEntryController');

router.route('/')
  .get(getFoodEntries)
  .post(createFoodEntry);
router.route('/:id')
  .put(updateFoodEntry)
  .delete(deleteFoodEntry);

module.exports = router;
