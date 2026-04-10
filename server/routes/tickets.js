const router = require("express").Router();
const Ticket = require("../models/Ticket");
const auth = require("../middleware/auth");

router.get("/", auth, async (req, res) => {
  const tickets = await Ticket.find({ userId: req.user.id });
  res.json(tickets);
});

router.post("/", auth, async (req, res) => {
  const ticket = await Ticket.create({
    ...req.body,
    userId: req.user.id
  });
  res.json(ticket);
});

module.exports = router;