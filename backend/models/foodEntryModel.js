const mongoose = require('mongoose');

const foodEntrySchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please add a food name.'],
  },
  babyLiked: {
    type: Boolean,
  },
  notes: {
    type: String,
  },
  type: {
    type: String,
    required: [true, 'Please specify what type of food this entry is.'],
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('FoodEntry', foodEntrySchema);
