const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
  sender: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  content: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
  channelId: { type: mongoose.Schema.Types.ObjectId, ref: 'Channel' },  // for group messages
  recipientId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },   // for direct messages
  readBy: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
});

const Message = mongoose.model('Message', messageSchema);

module.exports = Message;