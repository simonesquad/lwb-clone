import React from 'react';
import { Link } from 'react-router-dom';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_51NPs51EBtRupEVleuM8SiW0Mgs8vHyM6WwyHyUHF0UHqPpANB4f6lMun8oWZwnoXzKRalUIvFuo1f4xv0Y7meBoP00X3aIWwuu');

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
          <h5>$50.00</h5>
          </div>
        </div>
        <Link to="/checkout">
        <form action="/create-checkout-session" method="POST">
          <button type="submit">
            Checkout
          </button>
        </form>
        </Link>
      </section>
    </Elements>
  );
};

export default CheckoutPage;


