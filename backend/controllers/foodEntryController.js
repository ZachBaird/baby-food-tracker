const asyncHandler = require('express-async-handler');

// @desc    Get food entries
// @route   GET /api/foodentries
// @access  Private
const getFoodEntries = asyncHandler(async (req, res) => {
  return res.status(200).json({ message: 'Food entries here!' });
});

// @desc    Create food entry
// @route   POST /api/foodentries
// @access  Private
const createFoodEntry = asyncHandler(async (req, res) => {
  if (!req.body.name) {
    res.status(400);
    throw new Error('Please add a `name` field for food entry.');
  }
  return res.status(200).json({ message: 'Creating a food entry!' });
});

// @desc    Update food entry
// @route   PUT /api/foodentries/:id
// @access  PRIVATE
const updateFoodEntry = asyncHandler(async (req, res) => {
  return res.status(200).json({ message: `Updating food entry with id of ${req.params.id}` });
});

// @desc    Delete food entry
// @route   DELETE /api/foodentries/:id
// @access  PRIVATE
const deleteFoodEntry = asyncHandler(async (req, res) => {
  return res.status(200).json({ message: `Deleting food entry with id of ${req.params.id}` });
});

module.exports = {
  getFoodEntries,
  createFoodEntry,
  updateFoodEntry,
  deleteFoodEntry,
};
