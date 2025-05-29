import React from 'react';
import { SubscriptionProvider } from './context/SubscriptionContext';
import SubscriptionPlans from './components/SubscriptionPlans';
import MySubscriptions from './components/MySubscriptions';
import Footer from './components/Footer'; 
import './App.css';

function App() {
  return (
    <SubscriptionProvider>
      <div className="app-container">
        <h1 className="main-heading">Subscription Management</h1>
        <SubscriptionPlans />
        <MySubscriptions />
        <Footer /> 
      </div>
    </SubscriptionProvider>
  );
}

export default App;
