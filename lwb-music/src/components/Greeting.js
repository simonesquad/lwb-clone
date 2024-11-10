import React from 'react'
import FiveMoons from '../assets/NYT_5moons.jpeg'

import {
    Box,
    Heading,
    Text,
    Image,
    VStack,
    HStack
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
    <div>
        <VStack
            align='center'
            w='90vw'
            
          >
          <Box 
            h={{
              sm: '17vh',
              md: '19vh',
              lg: '22vh'
            }}
            marginTop='10%'
            >
            <Heading>Thank You for Reaching Out Over the LWB Music Project!</Heading>
          </Box>
          </VStack>

          <VStack
            align='center'
            w='90vw'
            
          >
          <HStack
            w='100vw'
          >
            <Box
              marginLeft='5%'
              w='80vw'
            >
              <Text>
                We appreciate the continued interest in the Louis W. Ballard music, life, and history. The team will get back to your inquiry as soon as they can. If you requested a certain music piece, please also check the music section of the website with an updated list of scores readily available. Other pieces might be found with publishers nationwide. Enjoy the #music
              </Text>
            </Box>
          </HStack>
          <HStack
            w='100vw'
          >
            <Box
              w='80vw'
              marginTop='5vh'
            >
              <Image
                src={FiveMoons} 
                w='100%'
                height={{
                  md: '70%',
                  lg: '80%',
                  xl: '90%'
                }}
              />
            </Box>
          </HStack>
        </VStack>
    </div>
  )
}

export default Greeting;