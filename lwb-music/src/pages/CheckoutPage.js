import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm'; // Your custom form component
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('your-publishable-key');

const CheckoutPage = () => {
  return (
   <Elements stripe={stripePromise}>
     <CheckoutForm />
    </Elements>
  );
};

export default CheckoutPage;