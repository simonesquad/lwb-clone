// new checkout page here**

import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const CheckoutForm = () => {
const [error, setError] = useState(null);
const stripe = useStripe();
const elements = useElements();

const handleSubmit = async (event) => {
    event.preventDefault();
        if (!stripe || !elements) {
        // Stripe.js has not loaded yet. Make sure to disable form submission until Stripe.js has loaded.
        return;
        }

    const cardElement = elements.getElement(CardElement);
    const { error } = await stripe.createPaymentMethod({
        type: 'card',
        card: cardElement,
    });

    if (error) {
        setError(error.message);
    } else {
        setError(null);
        // Handle successful payment method creation
    }
    };

    return (
        <form onSubmit={handleSubmit}>
             <CardElement />
        {error && <div className="error">{error}</div>}
        <button type="submit" disabled={!stripe}>
            Pay
        </button>
        </form>
    );
};

export default CheckoutForm;