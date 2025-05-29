import React, { useContext } from 'react';
import { SubscriptionContext } from '../context/SubscriptionContext';
import './SubscriptionPlans.css';

const plans = [
  { id: 1, name: "Basic", price: 10 },
  { id: 2, name: "Pro", price: 20 },
  { id: 3, name: "Enterprise", price: 50 }
];

const SubscriptionPlans = () => {
  const { subscribe } = useContext(SubscriptionContext);

  return (
    <div className="plans-container">
      <h2 className="plans-title">Available Plans</h2>
      <div className="plans-grid">
        {plans.map(plan => (
          <div className="plan-card" key={plan.id}>
            <h3>{plan.name}</h3>
            <p>${plan.price}/month</p>
            <button className="subscribe-btn" onClick={() => subscribe(plan)}>Subscribe</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubscriptionPlans;
