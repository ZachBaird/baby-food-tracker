const asyncHandler = require('express-async-handler');
const { createErrorResponse } = require('../utilities/createErrorResponse');
const Baby = require('../models/babyModel');

// @desc      Gets list of babies of user/parent
// @route     GET /api/babies
// @access    Private
const getBabies = asyncHandler(async (req, res) => {
  const babies = await Baby.find({ user: req.user.id });
  res.status(200).json(babies);
});

// @desc      Creates a baby for a user/parent
// @route     POST /api/babies
// @access    Private
const createBaby = asyncHandler(async (req, res) => {
  if (!req.body.name)
    createErrorResponse(res, 400, 'A name is required for the baby.');

  const baby = await Baby.create({
    name: req.body.name,
    user: req.user.id,
  });

  res.status(200).json(baby);
});

// @desc      Updates a baby
// @route     PUT /api/babies/:id
// @access    Private
const updateBaby = asyncHandler(async (req, res) => {
  const baby = await Baby.findById(req.params.id);
  if (!baby)
    createErrorResponse(res, 400, 'Baby not found.');

  const dataToUpdate = {
    name: req.body?.name ?? baby.name,
  };

  const updatedBaby = await Baby.findByIdAndUpdate(req.params.id, dataToUpdate, { new: true });
  return res.status(200).json(updatedBaby);
});

// @desc      Deletes a baby from a user/parent's profile
// @route     DELETE /api/babies/:id
// @access    Private
const deleteBaby = asyncHandler(async (req, res) => {
  const baby = await Baby.findById(req.params.id);
  if (!baby)
    createErrorResponse(res, 400, 'Baby not found.');

  await baby.remove();
  return res.status(200).json({ id: req.params.id, message: `Deleting baby with id of ${req.params.id}.` });
});

module.exports = {
  getBabies,
  createBaby,
  updateBaby,
  deleteBaby
};
