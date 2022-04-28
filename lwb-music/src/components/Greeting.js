import React from 'react'

import {
    Box,
    Heading,
    Text
} from '@chakra-ui/react';

const Greeting = () => {
  return (
    <Box w='100vw' h='100vh'>
        <Box w='50vw' h='50vh'>
            <Heading>Thank You for Reaching Out!</Heading>
            <Text>We appreciate the continued interest in Louis W. Ballard music and history. We will get back to your inquiry as soon as we can.</Text>
        </Box>
    </Box>
  )
}

export default Greeting