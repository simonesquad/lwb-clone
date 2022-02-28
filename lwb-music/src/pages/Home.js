import React from 'react'
import LWB from '../assets/long-shot.png'
import LWB2 from '../assets/4-moons.png'
import LWB3 from '../assets/lwb_1.jpg'

import {
    VStack, 
    HStack,
    Stack,
    StackDivider,
    Heading,
    Text,
    Image,
    Box,
    AspectRatio,
} from '@chakra-ui/react';

function Home() {
    return (
       <div>
        <div>
        <Stack>
        <VStack 
                divider={<StackDivider borderColor='gray.200' />}
                spacing={1}
                align='center'
            >

            <HStack w='97vw' h='85vh'>
            <Image src={LWB} />
                <VStack 
                    align='right'
                    w='60vw'
                >
                <Heading as='h2' size='2xl'>
                Music history </Heading><Heading as='h3' size='md'>is replete with examples of composers who championed the cause of </Heading><Heading as='h2' size='2xl'>oppressed people. Composers </Heading><Heading as='h3' size='md'>and their music sustained the spirit of their people at a time of foreign cultural attack and domination. Dvořák, in 1893, predicted that America should have a form of nationalistic music</Heading><Heading as='h2' size='2xl'>built upon Indian music and black slave songs.</Heading><Heading as='h3' size='md'>So I felt that I was in good company when I took up my pen to express the sufferings of my people, their regeneration and hopes for a better future life…</Heading><Heading as='h2' size='xl'>It is my hope that this work will be indelibly associated with the Indian movement and ideals, but also that the worth of the work itself shall rise above all political emotions of this epoch.</Heading>
                <Heading as='h3' size='md'>
                —Louis Ballard, program note for Incident at Wounded Knee, performed at Carnegie Hall, 1999
                </Heading>
                </VStack>
                
            </HStack>

            <HStack w='100vw' h='120vh'>
                <Image src={LWB3} />
                <VStack
                    align='center'
                    w='30vw'
                >
                    <Heading>1931-2008</Heading>
                </VStack>
            </HStack>

            <HStack w='97vw' h='85vh'>
                
                <VStack 
                    align='left'
                    w='60vw'
                >
                <Heading as='h2' size='2xl'>
                I have found myself</Heading><Heading as='h3' size='md'>in a curious circumstance, in that I am literally</Heading><Heading as='h2' size='2xl'>between two worlds ...</Heading><Heading as='h3' size='md'>that of the American Indian and that of Western society. These two worlds, of historical necessity, have been forced to coexist yet their</Heading><Heading as='h2' size='xl'>values and aesthetic concepts have remained almost irreconcilable.</Heading><Heading as='h3' size='md'>In my music I have sought to fuse these worlds for I believe that an artist can get to the heart of a culture through</Heading><Heading as='h2' size='2xl'>new forms alien to that culture.</Heading>
                <Heading as='h3' size='md'>
                —Louis Ballard
                </Heading>
                </VStack>
                
                <Image 
                    src={LWB2} 
                />

            </HStack>

            <HStack w='97vw' h='85vh'>
                <VStack 
                    align='center'
                    w='60vw'
                >
                <Heading as='h2' size='2xl'>Welcome to the Louis W. Ballard Memorial Page</Heading>
                <Heading as='h3' size='sm'>
                    This page has been created and will be being updated by his granddaughter, Simone A. Ballard from 2022 onwards. Louis left his family in 2008, but we never wanted to forget his legacy. While some performances of his music have taken place in the interim, and further articles have been written, this is the first family-sponsored revival of his story in 15 years. We sincerely thank our friends and family who helped us reach this point. If you have an inquiry about LWB music please feel free to use the contact form here and otherwise we hope you enjoy learning about his unique journey and thanks for visiting! 
                </Heading>
                </VStack>

            </HStack>


        </VStack>
        </Stack>
        </div>
    </div>
    )
}

export default Home


{/* <Box boxSize='sm'>
    <Heading size="2x1">In memory of Louis W. Ballard | 1931-2007</Heading>
    <Text>Ballard is widely recognized as the "grandfather of Native American classical music" and was one of the premier classical music composers of the 20th century. This site is set up and maintained by his family to honor his unique legacy and continue celebrating his pioneering spirit.</Text>
    </Box> */}