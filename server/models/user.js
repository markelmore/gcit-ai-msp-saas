const mongoose = require("mongoose");

module.exports = mongoose.model("User", {
  email: String,
  password: String,
  orgId: String,
  role: { type: String, default: "client" },
  subscriptionStatus: { type: String, default: "inactive" },
  stripeCustomerId: String
});