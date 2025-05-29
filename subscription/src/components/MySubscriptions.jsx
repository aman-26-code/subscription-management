import React, { useContext } from 'react';
import { SubscriptionContext } from '../context/SubscriptionContext';
import './MySubscriptions.css';

const MySubscriptions = () => {
  const { subscriptions, cancelSubscription } = useContext(SubscriptionContext);

  return (
    <div className="subscriptions-container">
      <h2 className="subscriptions-title">My Subscriptions</h2>
      {subscriptions.length === 0 ? (
        <p className="no-subscriptions">No active subscriptions.</p>
      ) : (
        subscriptions.map((sub) => (
          <div className="subscription-card" key={sub.uniqueId}>
            <div className="subscription-info">
              <h3>{sub.name}</h3>
              <p>${sub.price}/month</p>
            </div>
            <button className="cancel-btn" onClick={() => cancelSubscription(sub.uniqueId)}>Cancel</button>
          </div>
        ))
      )}
    </div>
  );
};

export default MySubscriptions;
