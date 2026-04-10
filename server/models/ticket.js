const mongoose = require("mongoose");

module.exports = mongoose.model("Ticket", {
  title: String,
  description: String,
  status: { type: "open" },
  userId: String,
  orgId: String,
  aiAnalysis: String
});