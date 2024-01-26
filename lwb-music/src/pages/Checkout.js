import React from 'react'
import { useSelector } from "react-redux"
import { selectItems } from "../slices/basketSlice";
import CheckoutProduct from "../components/CheckoutProduct";

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

            <button>{session}</button>
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