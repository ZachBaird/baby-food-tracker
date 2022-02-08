const asyncHandler = require('express-async-handler');

// Model.
const FoodEntry = require('../models/foodEntryModel');

// @desc    Get food entries
// @route   GET /api/foodentries
// @access  Private
const getFoodEntries = asyncHandler(async (req, res) => {
  const foodEntries = await FoodEntry.find();
  return res.status(200).json(foodEntries);
});

// @desc    Create food entry
// @route   POST /api/foodentries
// @access  Private
const createFoodEntry = asyncHandler(async (req, res) => {
  if (!req.body.name) {
    res.status(400);
    throw new Error('Please add a `name` field for food entry.');
  }

  const foodEntry = await FoodEntry.create({
    name: req.body.name,
    babyLiked: req.body.babyLiked,
    notes: req.body.notes,
    type: req.body.type,
  });

  return res.status(200).json(foodEntry);
});

// @desc    Update food entry
// @route   PUT /api/foodentries/:id
// @access  PRIVATE
const updateFoodEntry = asyncHandler(async (req, res) => {
  const foodEntry = await FoodEntry.findById(req.params.id);

  if (!foodEntry) {
    res.status(400);
    throw new Error('Food entry not found');
  }

  // Going to pull out what I want manually to avoid people sending unnecessary data potentially.
  const dataToUpdate = {
    name: req.body?.name ?? foodEntry.name,
    babyLiked: req.body?.babyLiked ?? foodEntry.babyLiked,
    notes: req.body?.notes ?? foodEntry.notes,
    type: req.body?.type ?? foodEntry.type,
  };

  const updatedFoodEntry = await FoodEntry.findByIdAndUpdate(req.params.id, dataToUpdate, { new: true });

  return res.status(200).json(updatedFoodEntry);
});

// @desc    Delete food entry
// @route   DELETE /api/foodentries/:id
// @access  PRIVATE
const deleteFoodEntry = asyncHandler(async (req, res) => {
  const foodEntry = await FoodEntry.findById(req.params.id);

  if (!foodEntry) {
    res.status(400);
    throw new Error('Food entry not found');
  }

  await foodEntry.remove();
  return res.status(200).json({ id: req.params.id, message: `Deleting food entry with id of ${req.params.id}` });
});

module.exports = {
  getFoodEntries,
  createFoodEntry,
  updateFoodEntry,
  deleteFoodEntry,
};
