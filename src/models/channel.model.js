const mongoose = require('mongoose');

const channelSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  members: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  isPrivate: { type: Boolean, default: false },  // true for private groups
  createdAt: { type: Date, default: Date.now }
});

const Channel = mongoose.model('Channel', channelSchema);

module.exports = Channel;