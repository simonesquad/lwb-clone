import React from 'react'
import FiveMoons from '../assets/NYT_5moons.jpeg'

import {
    Box,
    Heading,
    Text,
    Image
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
            <Heading>Thank You for Reaching Out Over the LWB Music Project!</Heading>
          </Box>
            <Text>
              We appreciate the continued interest in the Louis W. Ballard music, life, and history. The team will get back to your inquiry as soon as they can. If you requested a certain music piece, please also check the music section of the website with an updated list of scores readily available. Other pieces might be found with publishers nationwide. Enjoy the #music
            </Text>

            <Image
              src={FiveMoons} 
              height={{
                  sm: '45%',
                  md: '35%',
                  lg: '65%',
                  xl: '85%',
              }}
            />
        </Box>
    </Box>
  )
}

export default Greeting;