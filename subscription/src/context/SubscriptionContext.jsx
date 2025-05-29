import React, { createContext, useState, useEffect } from 'react';

export const SubscriptionContext = createContext();

export const SubscriptionProvider = ({ children }) => {
  const [subscriptions, setSubscriptions] = useState([]);

  const subscribe = (plan) => {
    const uniquePlan = { ...plan, uniqueId: Date.now() }; // unique instance
    setSubscriptions(prev => [...prev, uniquePlan]);
  };

  const cancelSubscription = (uniqueId) => {
    setSubscriptions(prev => prev.filter(plan => plan.uniqueId !== uniqueId));
  };

  useEffect(() => {
    console.log("Subscription context initialized");
  }, []);

  return (
    <SubscriptionContext.Provider value={{ subscriptions, subscribe, cancelSubscription }}>
      {children}
    </SubscriptionContext.Provider>
  );
};
