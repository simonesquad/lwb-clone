import React from 'react';

//pictures here*
// vertical 
import g1 from '../assets/gallery/g_1.png';
import g2 from '../assets/gallery/g_2.png';
import g4 from '../assets/gallery/g_4.png';
import g8 from '../assets/gallery/g_8.png';
// later addition 2024
import g3 from '../assets/gallery/g_3.png';
import g7 from '../assets/gallery/g_7.png';

// horizontal
import g5 from '../assets/gallery/g_5.png';
import g9 from '../assets/gallery/g_9.png';
import g11 from '../assets/gallery/g_11.png';
import g12 from '../assets/gallery/g_12.png';


import {
    Box,
    Grid,
    GridItem,
    Heading,
    Image,
    Stack,
    VStack,
} from '@chakra-ui/react';
import { createBreakpoints } from '@chakra-ui/theme-tools';

const breakpoints = createBreakpoints({
    sm: '30em',
    md: '48em',
    lg: '62em',
    xl: '80em',
    '2xl': '96em',
  })

  function MobileGallery() {
      return (
          <Stack
            align='center'
          >
              <VStack 
                spacing={1}
                align='center'
            >
              <VStack
                h={{
                    base: '100vh'
                }}
              >
                <Box
                    w={{
                        base: '90vw'
                    }}
                    marginTop='5vh'
                >
                <Image src={g1} alt='koshare-ballet' />
                </Box>
                </VStack>

              <VStack
                h={{
                    base: '55vh',
                }}
              >
                <Box
                    w={{
                        base: '90vw'
                    }}
                    marginTop='5vh'
                >
                <Grid templateColumns='repeat(2, 1fr)' gap={10}>
                    <GridItem w='90' h='20'>
                        <Image src={g2} alt='lwb-flute' />
                    </GridItem>
                    <GridItem w='90' h='20'>
                        <Image src={g4} alt='koshare-piano' />
                    </GridItem>
                </Grid>
            </Box>
            </VStack>

              <VStack
                h={{
                    base: '55vh'
                }}
              >
                <Box
                    w={{
                        base: '90vw'
                    }}
                    marginTop='5vh'
                >
                <Grid templateColumns='repeat(2, 1fr)' gap={5}>
                    <GridItem w='50' h='20'>
                    <Image src={g5} alt='me' />
                    </GridItem>
                    <GridItem w='50' h='20'>
                        <Image src={g12} alt='snow' />
                    </GridItem> 
                </Grid>
                </Box>
            </VStack>


              <VStack
                h={{
                    base: '100vh'
                }}
              >
                <Box
                    w={{
                        base: '90vw'
                    }}
                    marginTop='5vh'
                >
                <Image src={g8} alt='lwb-flute2' />
                </Box>
                </VStack>


            <VStack
                h={{
                    base: '55vh'
                }}
              >
              <Box
                    w={{
                        base: '90vw'
                    }}
                    marginTop='5vh'
                >
            <Grid templateColumns='repeat(2, 1fr)' gap={7}>
                <GridItem w='50' h='20'>
                    <Image src={g9} alt='tree' />
                </GridItem>
                <GridItem w='50' h='20'>
                    <Image src={g11} alt='water' />
                </GridItem>
            </Grid>
            </Box>
            </VStack>

            <VStack
                h={{
                    base: '60vh'
                }}
              >
            <Box
                w={{
                    base: '90vw'
                }}
                marginTop='5vh'
                >
                <Grid templateColumns='repeat(2, 1fr)' gap={10}>
                    <GridItem w='90' h='20'>
                        <Image src={g3} alt='maria-costume' />
                    </GridItem>
                    <GridItem w='90' h='20'>
                        <Image src={g7} alt='lwb-pose' />
                    </GridItem>
                </Grid>
            </Box>
            </VStack>
            
           
        </VStack>
    </Stack>
    )
  }

  export default MobileGallery;