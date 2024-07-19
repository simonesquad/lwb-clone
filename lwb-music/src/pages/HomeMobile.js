import React from 'react'
import LWB from '../assets/long-shot.png'
import LWB2 from '../assets/4-moons.png'
import LWB3 from '../assets/lwb_1.jpg'
import LWB4 from '../assets/gallery/g_6.png'
import Sidebar from '../components/Sidebar'

import {
    VStack, 
    Box,
    Stack,
    Heading,
    Image,
    Drawer,
    DrawerContent,
    useDisclosure,
    useBreakpointValue,
} from '@chakra-ui/react';
import { createBreakpoints } from '@chakra-ui/theme-tools';

const breakpoints = createBreakpoints({
    sm: '30em',
    md: '48em',
    lg: '62em',
    xl: '80em',
    '2xl': '96em',
  })

  function HomeMobile() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const shrink = useBreakpointValue({ base: 'md', lg: '2xl' })
    return (
        <div>
        <Box minH="100vh" bg="gray.100">
        <Drawer
            autoFocus={false}
            isOpen={isOpen}
            placement="left"
            onClose={onClose}
            returnFocusOnClose={false}
            onOverlayClick={onClose}
            size="full"
        >
            <DrawerContent>
            <Sidebar onClose={onClose} />
            </DrawerContent>
        </Drawer>
        <Stack>
        <VStack 
                spacing={1}
                align='center'
            >
        <VStack 
                marginTop='45px'
                w='80vw'
                h='160vh'
                >
        <Box fontSize={["sm"]}>
                <Heading 
                    as='h2' 
                    size='2xl'>
                Music history</Heading><Heading as='h3' size='md'>is replete with examples of composers who championed the cause of </Heading><Heading as='h2' size='2xl'>oppressed people. Composers </Heading><Heading as='h3' size='md'>and their music sustained the spirit of their people at a time of foreign cultural attack and domination. Dvořák, in 1893, predicted that America should have a form of nationalistic music</Heading><Heading as='h2' size='2xl'>built upon Indian music and black slave songs.</Heading><Heading as='h3' size='md'>So I felt that I was in good company when I took up my pen to express the sufferings of my people, their regeneration and hopes for a better future life…</Heading><Heading as='h2' size='xl'>It is my hope that this work will be indelibly associated with the Indian movement and ideals, but also that the worth of the work itself shall rise above all political emotions of this epoch.</Heading>
                <Heading as='h3' size='md'>
                —Louis Ballard, program note for Incident at Wounded Knee, performed at Carnegie Hall, 1999
                </Heading>
                    </Box>
                </VStack>
                <Box
                    h='110vh'
                >
                <Image 
                    src={LWB} 
                    h='100vw'
                    w='45vw'
                />
                 </Box>
                <VStack 
                    marginTop='5vh'
                    w='80vw'
                    h='100vh'
                >
                <Box h='35vh'>
                <Heading as='h2' size='2xl'>Welcome to the Louis W. Ballard Memorial Page</Heading>
                </Box>
                <Box marginLeft={20}>
                <Heading as='h3' size='sm'>
                    This page has been created and will be being updated by his granddaughter, Simone A. Ballard from 2022 onwards. Louis left his family in 2008, but we never wanted to forget his legacy. While some performances of his music have taken place in the interim, and further articles have been written, this is the first family-sponsored revival of his story in 15 years. We sincerely thank our friends and family who helped us reach this point. If you have an inquiry about LWB music please feel free to use the contact form here and otherwise we hope you enjoy learning about his unique journey and thanks for visiting! 
                </Heading>
                </Box>
                </VStack>
                <Box
                    h='110vh'
                >
                <Image 
                    src={LWB2} 
                    w='85vw'
                />
                </Box>

                <VStack 
                    marginTop='75px'
                    w='80vw'
                    h='120vh'
                >
                <Heading as='h2' size='2xl'>I have found myself</Heading><Heading as='h3' size='md'>in a curious circumstance, in that I am literally</Heading><Heading as='h2' size='2xl'>between two worlds ...</Heading><Heading as='h3' size='md'>that of the American Indian and that of Western society. These two worlds, of historical necessity, have been forced to coexist yet their</Heading><Heading as='h2' size='xl'>values and aesthetic concepts have remained almost irreconcilable.</Heading><Heading as='h3' size='md'>In my music I have sought to fuse these worlds for I believe that an artist can get to the heart of a culture through</Heading><Heading as='h2' size='2xl'>new forms alien to that culture.</Heading>
                </VStack>

                <Box
                    h='110vh'
                >
                <Image 
                    src={LWB4} 
                    w='90vw'
                    />
                </Box>

                <VStack 
                    marginTop='75px'
                    w='80vw'
                    h='120vh'
                >
                <Heading as='h2' size='xl'>
                Don't think because you're a non-Indian</Heading><Heading as='h3' size='md'>you can't sing Indian songs. These are our songs as Americans and we must learn to recognize it.</Heading><Heading as='h2' size='2xl'>Indian singing is the most natural in the world'...</Heading><Heading as='h3' size='md'>Find an Indian who knows songs, he said, and listen carefully...</Heading><Heading as='h2' size='xl'>Learn so you can sing them under water or in your sleep!</Heading><Heading as='h3' size='md'>When a lead Indian singer dies its like an archive burning down...</Heading><Heading as='h2' size='xl'>Here's epic literature. Here's epic poetry - and it's unwritten.</Heading>
                </VStack>

                <VStack
                    align='center'
                    w='100vw'
                    h={{
                        base: '90vh'
                    }}
                    marginTop={45}
                >
                    <iframe
                        title='em_piano'
                        src='https://www.youtube.com/embed/ZMkSVs4WC3Q'
                        height="300"
                        width="500"
                        >
                    </iframe>
                </VStack>

                <VStack 
                    marginTop='45px'
                    w='80vw'
                    h='140vh'
                >
                <Heading as='h2' size='2xl'>
                "I want to thank you for the excellent coverage of my activities...</Heading><Heading as='h3' size='md'>Society, of course, needs the composer, but often it is felt that the composer does not need society. This is not true and I take the opportunity to verify it.</Heading><Heading as='h2' size='xl'>Many people have called to express their interest in my work and the thriving Santa Fe music scene.</Heading><Heading as='h3' size='md'>I even received an invitation to conduct a program of my music in the Midwest by a gentleman who was passing through our town.</Heading><Heading as='h2' size='xl'>Keep up your coverage of Santa Fe arts and artists."</Heading>
                <Heading as='h3' size='md'>- Louis Ballard, Letter to the Editor of Santa Fe New Mexican, 1975</Heading>
                </VStack>

                <VStack
                    align='center'
                    w='100vw'
                    h='90vh'
                >
                <Image 
                    src={LWB3} 
                    w='90vw'
                    marginTop='45px'
                    />
                <Box>
                <Heading as='h3' size='md'>1931-2007</Heading>
                </Box>
                </VStack>
    
            </VStack>
        </Stack>
    </Box>
</div>
    )
  }

  export default HomeMobile;