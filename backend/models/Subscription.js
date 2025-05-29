const mongoose = require('mongoose');

const SubscriptionSchema = new mongoose.Schema({
  name: String,
  price: Number,
  subscribedAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Subscription', SubscriptionSchema);
