const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String,unique: true, required: true, index: true },
  email: { type: String, unique: true, required: true, index: true },
  password: { type: String, required: true },
  profilePicUrl: { type: String },
  status: { type: String, enum: ['online', 'offline'], default: 'offline' },
  firstName: { type: String, required: true, index: true },
  lastName: { type: String, required: true, index: true },
  friends: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

// update the 'updatedAt' field before saving the document
userSchema.pre('save', function (next) {
  this.updatedAt = new Date();
  next();
});

const User = mongoose.model('User', userSchema);

module.exports = User;
