import React from 'react'
import { useSelector } from "react-redux"
import { selectItems, selectTotal } from "../slices/basketSlice";
import { useSession } from "next-auth/client";
import CheckoutProduct from "../components/CheckoutProduct";
import { loadStripe } from "@strip/stripe-js";
const stripePromise = loadStripe(process.env.stripe_public_key);


// import {
//     Box,
//     Heading,
//     Stack,
// } from '@chakra-ui/react';
// import { createBreakpoints } from '@chakra-ui/theme-tools';

// const breakpoints = createBreakpoints({
//     sm: '30em',
//     md: '48em',
//     lg: '62em',
//     xl: '80em',
//     '2xl': '96em',
//   })

function Checkout() {
  const items = useSelector(selectItems);
  const total = useSelector(selectTotal);
  const [session] = useSession();

  const createCheckoutSession = async () => {
    const stripe = await stripePromise;

    // Call the backend to create a checkout session ...
    const checkoutSession = await axios.post('/api/create-checkout-session', 
    {
      items: items,
      email: session.user.email
    });
    // Redirecting the customer to checkout**
    const result = await stripe.redirectToCheckout({
      sessionId: checkoutSession.data.id,
    });

    if (result.error) alert(result.error.message);
  };

  return (
    <div>
      <img></img>

      <div>
        <h1>Shopping Basket</h1>
          {items.map((item, i) => (
            <CheckoutProduct
              key={i}
              id={item.id}
              title={item.title}
              price={item.price}
              description={item.description}
              image={item.image}
            />
          ))}
      </div>

      <div>
        {items.length > 0 && (
          <>
            <h2>
              Subtotal ({items.length} items): 
            </h2>

            <button 
              role='link'
              onClick={createCheckoutSession}
              disabled={!session}
              >Proceed to checkout</button>
          </>
        )}
        </div>
    </div>


    // <Stack>
    //     <Heading>I am the checkout page!!</Heading>
    //     <Box>
    //         {/* <Image /> */}

    //         <Box>
    //             <Heading>Your Selection Cart</Heading>
    //         </Box>
    //     </Box>
    // </Stack>
  )
}

export default Checkout