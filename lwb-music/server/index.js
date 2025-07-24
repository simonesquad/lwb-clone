const express = require('express');
const app = express();
const port = 5000;

    // Example (Node.js with Express)
    const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

    app.post('/create-payment-intent', async (req, res) => {
        try {
            const paymentIntent = await stripe.paymentIntents.create({
                amount: 1000, // Amount in cents (e.g., $10.00)
                currency: 'usd',
                // Add other parameters as needed
            });
            res.json({ clientSecret: paymentIntent.client_secret });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    });


app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});



