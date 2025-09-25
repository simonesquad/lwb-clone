import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(process.env.STRIPE_PUBLISHABLE_KEY);

const CheckoutPage = () => {
  return (
   <Elements stripe={stripePromise}>
        <section>
        <div className="product">
          <img
            src="https://i.imgur.com/EHyR2nP.png"
            alt="The cover of Stubborn Attachments"
          />
          <div className="description">
          <h3>Stubborn Attachments</h3>
          <h5>$20.00</h5>
          </div>
        </div>
        <form action="/checkout" method="POST">
          <button type="submit">
            Checkout
          </button>
        </form>
      </section>
    </Elements>
  );
};

export default CheckoutPage;

//new comment here

// import React, { useState, useEffect } from "react";

// const CheckoutForm = () => (
  
// );

