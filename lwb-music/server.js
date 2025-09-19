// This example sets up an endpoint using the Express framework.
const express = require('express');
const app = express();

const stripe = require('stripe')('sk_test_51NPs51EBtRupEVleXTGb45mafbLCPm7dW9447U8Ew3pxysPPGiws8Kjn1vOHmGB14Y9G5bfWym5Gk6iYlG1tHZxf00XbCYLyhC');

app.post('/create-checkout-session', async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    line_items: [{
      price_data: {
        currency: 'usd',
        product_data: {
          name: 'T-shirt',
        },
        unit_amount: 2000,
      },
      quantity: 1,
    }],
    mode: 'payment',
    ui_mode: 'embedded',
    return_url: 'https://example.com/checkout/return?session_id={CHECKOUT_SESSION_ID}'
  });

  res.send({clientSecret: session.client_secret});
});

app.get('/session_status', async (req, res) => {
    const session = await stripe.checkout.sessions.retrieve(req.query.session_id);
  
    res.send({
      status: session.status,
      payment_status: session.payment_status,
      customer_email: session.customer_details.email
    });
  });

app.listen(4242, () => console.log(`Listening on port ${4242}!`));