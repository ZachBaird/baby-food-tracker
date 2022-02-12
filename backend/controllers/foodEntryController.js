const asyncHandler = require('express-async-handler');
const { createErrorResponse } = require('../utilities/createErrorResponse');
const FoodEntry = require('../models/foodEntryModel');
const Baby = require('../models/babyModel');

// @desc    Get food entries
// @route   GET /api/foodentries
// @access  Private
const getFoodEntries = asyncHandler(async (req, res) => {
  const baby = await Baby.findOne({ user: req.user.id });
  if (!baby)
    createErrorResponse(res, 403, 'Invalid baby access.');

  const foodEntries = await FoodEntry.find({ baby: req.params.babyId });
  return res.status(200).json(foodEntries);
});

// @desc    Get a food entry by Id
// @route   GET /api/foodentries/:id
// @access  Private
const getFoodEntry = asyncHandler(async (req, res) => {
  const baby = await Baby.findOne({ user: req.user.id });
  if (!baby)
    createErrorResponse(res, 403, 'Invalid baby access.');

  const foodEntry = await FoodEntry.findById(req.params.id);
  return res.status(200).json(foodEntry);
})

// @desc    Create food entry
// @route   POST /api/foodentries
// @access  Private
const createFoodEntry = asyncHandler(async (req, res) => {
  if (!req.body.name)
    createErrorResponse(res, 400, 'Please add a `name` field for food entry.');

  // @TODO
  //  I need to avoid duplicate food entries.
  //  If a food exists via a name AND baby Id, then we want to create an error response
  // const foodExistsForBaby = await FoodEntry.findOne({ name: })
  // if (foodExistsForBaby)
  //   createErrorResponse(res, 400, 'Food already exists!');

  const foodEntry = await FoodEntry.create({
    name: req.body.name,
    babyLiked: req.body.babyLiked,
    notes: req.body.notes,
    type: req.body.type,
    baby: req.params.babyId,
  });

  return res.status(200).json(foodEntry);
});

// @desc    Update food entry
// @route   PUT /api/foodentries/:id
// @access  PRIVATE
const updateFoodEntry = asyncHandler(async (req, res) => {
  const baby = await Baby.findOne({ user: req.user.id });
  if (!baby)
    createErrorResponse(res, 403, 'Invalid baby access.');
  
  const foodEntry = await FoodEntry.findById(req.params.id);
  if (!foodEntry)
    createErrorResponse(res, 400, 'Food entry not found.');

  // Going to pull out what I want manually to avoid people sending unnecessary data potentially.
  const dataToUpdate = {
    name: req.body?.name ?? foodEntry.name,
    babyLiked: req.body?.babyLiked ?? foodEntry.babyLiked,
    notes: req.body?.notes ?? foodEntry.notes,
    type: req.body?.type ?? foodEntry.type,
  };

  if (req.body?.babyLiked === null)
    dataToUpdate.babyLiked = null;

  const updatedFoodEntry = await FoodEntry.findByIdAndUpdate(req.params.id, dataToUpdate, { new: true });

  return res.status(200).json(updatedFoodEntry);
});

// @desc    Delete food entry
// @route   DELETE /api/foodentries/:id
// @access  PRIVATE
const deleteFoodEntry = asyncHandler(async (req, res) => {
  const baby = await Baby.findOne({ user: req.user.id });
  if (!baby) 
    createErrorResponse(res, 403, 'Invalid baby access.');
    
  const foodEntry = await FoodEntry.findById(req.params.id);
  if (!foodEntry)
    createErrorResponse(res, 400, 'Food entry not found.');

  await foodEntry.remove();
  return res.status(200).json({ id: req.params.id, message: `Deleting food entry with id of ${req.params.id}.` });
});

module.exports = {
  getFoodEntries,
  getFoodEntry,
  createFoodEntry,
  updateFoodEntry,
  deleteFoodEntry,
};
