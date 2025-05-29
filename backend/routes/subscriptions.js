const express = require('express');
const router = express.Router();
const Subscription = require('../models/Subscription');

// Get all subscriptions
router.get('/', async (req, res) => {
  const subs = await Subscription.find();
  res.json(subs);
});

// Add subscription
router.post('/', async (req, res) => {
  const sub = new Subscription(req.body);
  await sub.save();
  res.json(sub);
});

// Cancel subscription
router.delete('/:id', async (req, res) => {
  await Subscription.findByIdAndDelete(req.params.id);
  res.json({ message: 'Subscription canceled' });
});

module.exports = router;
