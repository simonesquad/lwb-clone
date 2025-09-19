// import React from 'react';
// import { Elements } from '@stripe/react-stripe-js';
// import CheckoutForm from '../components/CheckoutForm'; // Your custom form component
// import { loadStripe } from '@stripe/stripe-js';

// const stripePromise = loadStripe(process.env.STRIPE_PUBLISHABLE_KEY);

// const CheckoutPage = () => {
//   return (
//    <Elements stripe={stripePromise}>
//      <CheckoutForm />
//     </Elements>
//   );
// };

// export default CheckoutPage;

//new comment here

import * as React from 'react';
import { useCallback } from 'react';
import {loadStripe} from '@stripe/stripe-js';
import {
  EmbeddedCheckoutProvider,
  EmbeddedCheckout
} from '@stripe/react-stripe-js';
require('dotenv').config();
// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.

const stripePromise = loadStripe(process.env.STRIPE_PUBLISHABLE_KEY);

const CheckoutPage = () => {
  const fetchClientSecret = useCallback(() => {
    // Create a Checkout Session
    return fetch("/create-checkout-session", {
      method: "POST",
    })
      .then((res) => res.json())
      .then((data) => data.clientSecret);
  }, []);

  const options = {fetchClientSecret};


  return (
    <div id="checkout">
      <EmbeddedCheckoutProvider
        stripe={stripePromise}
        options={options}
      >
        <EmbeddedCheckout />
      </EmbeddedCheckoutProvider>
    </div>
  )
}

export default CheckoutPage;