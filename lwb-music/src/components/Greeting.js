import React from 'react'

import {
    Box,
    Heading,
    Text
} from '@chakra-ui/react';
import { createBreakpoints } from '@chakra-ui/theme-tools';

const breakpoints = createBreakpoints({
    sm: '30em',
    md: '48em',
    lg: '62em',
    xl: '80em',
    '2xl': '96em',
  })

const Greeting = () => {
  return (
    <Box w='100vw' h='50vh'>
        <Box 
          w={{
            sm: '75vw',
            md: '55vw',
            lg:'50vw' 
          }}
          h='50vh'
          marginTop='15%'
          marginLeft='10%'
        >
          <Box h={{
            sm: '13vh',
            md: '14vh',
            lg: '9vh'
          }}>
            <Heading>Thank You for Reaching Out!</Heading>
          </Box>
            <Text>We appreciate the continued interest in Louis W. Ballard music and history. We will get back to your inquiry as soon as we can.</Text>
        </Box>
    </Box>
  )
}

export default Greeting