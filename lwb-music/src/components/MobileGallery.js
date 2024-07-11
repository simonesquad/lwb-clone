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
    Box,
    Grid,
    GridItem,
    Heading,
    Image,
    Stack,
    Spacer,
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
                w='95%'
                h={{
                    base: '85vh',
                    sm: '105vh',
                }}
              >
                <Box
                    w={{
                        base: '110vw',
                        sm: '80vw',
                    }}
                    marginTop='5vh'
                >
                <Image src={g1} alt='koshare-ballet' />
                </Box>
                <Spacer />
                <Box
                    w={{
                        base: '90vw',
                        sm: '90vw',
                    }}
                    h={{
                        base: '35vh',
                        sm: '45vh'
                    }}
                >
                <Heading as='h4' size='md'>The choreographer Donald Saddler with ballerina Marjorie Tallchief, dancers, and Louis W. Ballard seated in the background for rehearsal of the ballet Koshare.</Heading>
                </Box>
              </VStack>

              <VStack
                w='100%'
                h={{
                    base: '80vh',
                    sm: '100vh',
                }}
              >
            <Box
                h={{
                    base: '55vh',
                    sm: '70vh',
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
            </Box>
            <Box
                h={{
                    base: '70vh',
                    sm: '85vh',
                }}
                w={{
                    base: '90vw'
                }}
                marginTop='7vh'
            >
                <Heading as='h5' size='sm'>
                From Left to Right:
                Ballard holding a Sioux flute from his personal collection.
                Donald Sadler and Louis W. Ballard along with George Skibine director of the Harkness Ballet in rehearsal for the 1965 performance of Koshare.
                </Heading>
            </Box>
              </VStack>


              <VStack
                w='100%'
                h={{
                    base: '65vh',
                    sm: '75vh',
                }}
              >
                <Box
                    h={{
                        base: '40vh',
                        sm: '50vh'
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
                </Box>
            
            <Box
                h={{
                    base: '55vh',
                    sm: '65vh'
                }}
                w={{
                    base: '90vw'
                }}
                marginTop='7vh'
            >
                <Heading as='h5' size='sm'>
                The world premiere of the Portrait of Will Rogers in 1972. Pictured on the left are Dr. Wesley Forbis and Will Rogers Jr. in the center alongside Ballard.
                </Heading>
                </Box>
              </VStack>

              <VStack
                w='95%'
                h={{
                    base: '95vh',
                    sm: '85vh'
                }}
              >
                <Box
                    w={{
                        base: '100vw',
                        sm: '75vw'
                    }}
                    h={{
                        base: '90vh',
                        sm: '95vh'
                    }}
                >
                <Image src={g8} alt='lwb-flute2' />
                </Box>
                <Box
                   h={{
                    base: '65vh',
                    sm: '50vh'
                    }}
                    w={{
                        base: '90vw',

                    }}
                    marginTop='7vh'
                >
                <Heading as='h5' size='sm'>
                The composer in a promotional shot that he often used. Probably taken in Oklahoma, USA.
                </Heading>
                </Box>
              </VStack>

              <VStack
                w='100%'
                h={{
                    base: '90vh',
                    sm: '100vh',
                }}
              >
            
            <Box
                h={{
                    base: '70vh',
                    sm: '80vh'
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
            </Box>

            <Box
                h={{
                    base: '55vh',
                    sm: '70vh'
                }}
                w={{
                    base: '90vw',

                }}
                marginTop='7vh'
                >
                <Heading as='h5' size='sm'>
                On the Right: Sammy Davis Jr. and Louis W. Ballard attending the Tulsa Philharmonic Silver Anniversary in 1973. Sammy Davis Jr. performed and two Ballard pieces were performed.
                </Heading>
            </Box>
            </VStack>
        </VStack>
    </Stack>
      )
  }

  export default MobileGallery