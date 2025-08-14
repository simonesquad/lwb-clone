// const express = require('express');
// const app = express();
// const port = 5000;

//     // Example (Node.js with Express)
//     const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

//     app.post('/create-payment-intent', async (req, res) => {
//         try {
//             const paymentIntent = await stripe.paymentIntents.create({
//                 amount: 1000, // Amount in cents (e.g., $10.00)
//                 currency: 'usd',
//                 // Add other parameters as needed
//             });
//             res.json({ clientSecret: paymentIntent.client_secret });
//         } catch (error) {
//             res.status(500).json({ error: error.message });
//         }
//     });


// app.listen(port, () => {
//   console.log(`Server running on port ${port}`);
// });

// This test secret API key is a placeholder. Don't include personal details in requests with this key.
// To see your test secret API key embedded in code samples, sign in to your Stripe account.
// You can also find your test secret API key at https://dashboard.stripe.com/test/apikeys.

// This example sets up an endpoint using the Express framework.

const express = require('express');
const app = express();
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

app.post('/create-checkout-session', async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price_data: {
          currency: 'usd',
          product_data: {
            name: 'T-shirt',
          },
          unit_amount: 2000,
        },
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: 'http://localhost:4242/success',
    cancel_url: 'http://localhost:4242/cancel',
  });

  res.redirect(303, session.url);
});

app.listen(4242, () => console.log(`Listening on port ${4242}!`));

//////////



