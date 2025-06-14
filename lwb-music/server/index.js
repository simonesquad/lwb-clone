const express = require('express');
const app = express();
const port = 5000;

app.get('/api/data', (req, res) => {

    // async function getClientSecret() {
    //     const response = await fetch('/create-payment-intent', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify({ items: [{ id: 'prod_123' }] }), // Replace with your product or service information
    //     });
    //         const data = await response.json();
    //         return data.clientSecret;
    // }

  res.json({ message: 'Hello from the server!' });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});



