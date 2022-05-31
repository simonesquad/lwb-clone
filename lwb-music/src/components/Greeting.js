import React from 'react'

import {
    Box,
    Heading,
    Text
} from '@chakra-ui/react';

const Greeting = () => {
  return (
    <Box w='100vw' h='50vh'>
        <Box 
          w='50vw' 
          h='50vh'
          marginTop='15%'
          marginLeft='10%'
        >
          <Box h='9vh'>
            <Heading>Thank You for Reaching Out!</Heading>
          </Box>
            <Text>We appreciate the continued interest in Louis W. Ballard music and history. We will get back to your inquiry as soon as we can.</Text>
        </Box>
    </Box>
  )
}

export default Greeting