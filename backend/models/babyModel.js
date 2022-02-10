const mongoose = require('mongoose');

const babySchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please add a name for your baby.'],
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User',
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Baby', babySchema);
