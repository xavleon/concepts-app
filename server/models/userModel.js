const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
    min: 3,
    max: 255,
  },
  email: {
    type: String,
    require: true,
    min: 6,
    max: 255,
  },
  phone: {
    type: String,
    require: true,
    min: 10,
    max: 10,
  },
  message: {
    type: String,
    require: true,
    min: 6,
    max: 1024,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("User", userSchema);
