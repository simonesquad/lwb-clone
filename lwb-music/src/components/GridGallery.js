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
    Spacer,
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
              <VStack 
                spacing={1}
                align='center'
            >
              <HStack
                w='95%'
                h={{
                    base: '120vh',
                    sm: '90vh',
                    lg: '120vh'
                }}
              >
                <Box
                    w={{
                        base: '47vw',
                        sm: '50vw',
                        md: '40vw',
                        lg: '35vw'
                    }}
                >
                <Image src={g1} alt='koshare-ballet' />
                </Box>
                <Spacer />
                <Box
                    w={{
                        base: '35vw',
                        sm: '35vw',
                        md: '35vw',
                        lg: '40vw'
                    }}
                >
                <Heading as='h4' size='lg'>The choreographer Donald Saddler with ballerina Marjorie Tallchief, dancers, and Louis W. Ballard seated in the background for rehearsal of the ballet Koshare.</Heading>
                </Box>
              </HStack>

            <VStack
                w='100%'
                h={{
                    sm: '135vh',
                    md: '130vh',
                    lg: '145vh'
                }}
              >
            <Box
                h={{
                    sm: '115vh',
                    md: '125vh',
                    lg: '145vh'
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
                    sm: '30vh',
                    md: '40vh',
                    lg: '50vh'
                }}
                w='70vw'
                marginTop='6vh'
            >
                <Heading as='h4' size='md'>
                From Left to Right:
                Ballard holding a Sioux flute from his personal collection.
                Donald Sadler and Louis W. Ballard along with George Skibine director of the Harkness Ballet in rehearsal for the 1965 performance of Koshare.
                </Heading>
            </Box>
            </VStack>


            <VStack
                w='100%'
                h={{
                    sm: '85vh',
                    md: '75vh',
                    lg: '95vh'
                }}
            >

            <Box
                h={{
                    sm: '75vh',
                    md: '85vh',
                    lg: '95vh'
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
                    sm: '40vh',
                    md: '45vh',
                    lg: '50vh'
                }}
                w='70vw'
                marginTop='6vh'
            >
            <Heading as='h4' size='md'>
            The world premiere of the Portrait of Will Rogers in 1972. Pictured on the left are Dr. Wesley Forbis and Will Rogers Jr. in the center alongside Ballard.
            </Heading>
            </Box>

            </VStack>

              <HStack
                w='95%'
                h={{
                    base: '85vh',
                    sm: '80vh',
                    lg: '110vh'
                }}
              >
                <Box
                    w={{
                        base: '45vw',
                        lg: '40vw'
                    }}
                >
                <Heading as='h4' size='md'>
                The composer in a promotional shot that he often used. Probably taken in Oklahoma, USA.
                </Heading>
                </Box>
                <Box
                    w={{
                        base: '55vw',
                        sm: '60vw',
                        md: '50vw'
                    }}
                >
                <Image src={g8} alt='lwb-flute2' />
                </Box>
              </HStack>

              <VStack
                w='100%'
                h={{
                    base: '70vh',
                    sm: '70vh',
                    md: '80vh',
                    lg: '100vh'
                }}
              >
            <Box
                h={{
                    base: '30vh',
                    sm: '30vh',
                    md: '20vh',
                    lg: '15vh'
                }}
                w='70vw'
                marginTop='6vh'
                >
                <Heading as='h4' size='md'>
                On the Right: Sammy Davis Jr. and Louis W. Ballard attending the Tulsa Philharmonic Silver Anniversary in 1973. Sammy Davis Jr. performed and two Ballard pieces were performed.
                </Heading>
            </Box>
            <Box
                h={{
                    base: '45vh',
                    sm: '40vh',
                    lg: '55vh'
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
            </VStack>

            <VStack
                w='100%'
                h={{
                    sm: '135vh',
                    md: '130vh',
                    lg: '145vh'
                }}
              >
            <Box
                h={{
                    sm: '115vh',
                    md: '125vh',
                    lg: '145vh'
                }}

            >
            <Grid templateColumns='repeat(2, 1fr)' gap={10}>
                    <GridItem w='90' h='20'>
                        <Image src={g7} alt='lwb-pose' />
                    </GridItem>
                    <GridItem w='90' h='20'>
                        <Image src={g3} alt='maria-costume' />
                    </GridItem>
                </Grid>
            </Box>

            <Box
                h={{
                    sm: '30vh',
                    md: '40vh',
                    lg: '50vh'
                }}
                w='70vw'
                marginTop='6vh'
            >
                <Heading as='h4' size='md'>
                Louis W. Ballard classical music composer and his contemporary maverick ballerina Maria Tallchief - both native Oklahomans who represented the US worldwide in the performance arts for decades. 
                </Heading>
            </Box>
            </VStack>

        </VStack>
    </Stack>
      )
  }

  export default GridGallery;