import React from 'react';

//pictures here*
// vertical 
import g1 from '../assets/gallery/g_1.png';
import g2 from '../assets/gallery/g_2.png';
import g4 from '../assets/gallery/g_4.png';
import g8 from '../assets/gallery/g_8.png';

// horizontal
import g5 from '../assets/gallery/g_5.png';
import g9 from '../assets/gallery/g_9.png';
import g11 from '../assets/gallery/g_11.png';
import g12 from '../assets/gallery/g_12.png';


import {
    Grid,
    GridItem,
    Image,
    Stack,
    Text,
    HStack,
    VStack
} from '@chakra-ui/react';
import { createBreakpoints } from '@chakra-ui/theme-tools';

const breakpoints = createBreakpoints({
    sm: '30em',
    md: '48em',
    lg: '62em',
    xl: '80em',
    '2xl': '96em',
  })

  function GridGallery() {
      return (
          <Stack
            align='center'
          >
              <HStack
                w='100%'
                h='100vh'
              >
                <Image src={g1} alt='koshare-ballet' />
              </HStack>

              <VStack
                w='100%'
                h={{
                    sm: '34vh',
                    md: '60vh',
                    lg: '100vh'
                }}
              >
            <Grid templateColumns='repeat(2, 1fr)' gap={10}>
                <GridItem w='90' h='20'>
                    <Image src={g2} alt='lwb-flute' />
                </GridItem>
                <GridItem w='90' h='20'>
                    <Image src={g4} alt='koshare-piano' />
                </GridItem>
            </Grid>
              </VStack>


              <VStack
                w='100%'
                h={{
                    sm: '34vh',
                    md: '60vh',
                    lg: '100vh'
                }}
              >
            <Grid templateColumns='repeat(2, 1fr)' gap={5}>
                <GridItem w='50' h='20'>
                <Image src={g5} alt='me' />
                </GridItem>
                <GridItem w='50' h='20'>
                    <Image src={g12} alt='snow' />
                </GridItem> 
            </Grid>
              </VStack>

              <HStack
                w='100%'
                h='100vh'
                align='center'
              >
                <Image src={g8} alt='lwb-flute2' />
              </HStack>

              <VStack
                w='100%'
                h={{
                    sm: '34vh',
                    md: '60vh',
                    lg: '100vh'
                }}
              >

            <Grid templateColumns='repeat(2, 1fr)' gap={7}>
                <GridItem w='50' h='20'>
                    <Image src={g9} alt='tree' />
                </GridItem>
                <GridItem w='50' h='20'>
                    <Image src={g11} alt='water' />
                </GridItem>
            </Grid>
              </VStack>
          </Stack>
      )
  }

  export default GridGallery