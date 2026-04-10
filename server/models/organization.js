const mongoose = require("mongoose");

module.exports = mongoose.model("Organization", {
  name: String,
  ownerId: String,
  createdAt: { type: Date, default: Date.now }
});