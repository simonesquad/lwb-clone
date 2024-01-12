import React from 'react'

import {
    Box,
    Heading,
    Stack,
} from '@chakra-ui/react';
import { createBreakpoints } from '@chakra-ui/theme-tools';

const breakpoints = createBreakpoints({
    sm: '30em',
    md: '48em',
    lg: '62em',
    xl: '80em',
    '2xl': '96em',
  })

function Checkout() {
  return (
    <Stack>
        <Heading>I am the checkout page!!</Heading>
        <Box>
            {/* <Image /> */}

            <Box>
                <Heading>Your Selection Cart</Heading>
            </Box>
        </Box>
    </Stack>
  )
}

export default Checkout