const stripe = require('stripe')('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');

const express = require('express');
const app = express();
app.use(express.static('public'));

const YOUR_DOMAIN = 'http://localhost:3000';

app.post('/create-checkout-session', async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    ui_mode: 'embedded',
    line_items: [
      {
        price: 'price_1STDsnEBtRupEVleJCCPeLMa',
        quantity: 1,
      },
    ],
    mode: 'payment',
    return_url: `${YOUR_DOMAIN}/return?session_id={CHECKOUT_SESSION_ID}`,
  });

  res.send({clientSecret: session.client_secret});
});
  //   line_items: [
  //     {
  //   //   price_data: {
  //   //     currency: 'usd',
  //   //     product_data: {
  //   //       name: 'Stubborn Attachments',
  //   //     },
  //   //     unit_amount: 5000,
  //   //   },
  //   //   quantity: 1,
  //   // }],
  //   // mode: 'payment',
  //   // ui_mode: 'embedded',
  //   // return_url: 'https://example.com/checkout/return?session_id={CHECKOUT_SESSION_ID}'
  // });



app.get('/session_status', async (req, res) => {
    const session = await stripe.checkout.sessions.retrieve(req.query.session_id);
  
    res.send({
      status: session.status,
      customer_email: session.customer_details.email
    });
  });

app.listen(4242, () => console.log(`Listening on port ${4242}!`));