import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from '../components/CheckoutForm'; // Your custom form component
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(process.env.STRIPE_PUBLISHABLE_KEY);

const CheckoutPage = () => {
  return (
   <Elements stripe={stripePromise}>
     <CheckoutForm />
    </Elements>
  );
};

export default CheckoutPage;