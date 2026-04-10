const prices = {
  starter: "price_123",
  pro: "price_456",
  enterprise: "price_789"
};

router.post("/create-checkout", auth, async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    mode: "subscription",
    line_items: [
      {
        price: prices[req.body.plan],
        quantity: 1
      }
    ],
    success_url: `${process.env.CLIENT_URL}/dashboard`,
    cancel_url: `${process.env.CLIENT_URL}/billing`
  });

  res.json({ url: session.url });
});