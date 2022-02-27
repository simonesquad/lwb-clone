import React from 'react'
import LWB from '../assets/long-shot.png'
import {
    VStack, 
    HStack,
    Stack,
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
        <Stack width="full" height="full">
            <HStack w='100vw' h='85vh'>
                <Image src={LWB} />
                <VStack 
                    align='right'
                >
                <Heading as='h2' size='2xl'>
                Music history </Heading><Heading as='h3' size='md'>is replete with examples of composers who championed the cause of </Heading><Heading as='h2' size='2xl'>oppressed people. Composers </Heading><Heading as='h3' size='md'>and their music sustained the spirit of their people at a time of foreign cultural attack and domination. Dvořák, in 1893, predicted that America should have a form of nationalistic music</Heading><Heading as='h2' size='2xl'>built upon Indian music and black slave songs.</Heading><Heading as='h3' size='md'>So I felt that I was in good company when I took up my pen to express the sufferings of my people, their regeneration and hopes for a better future life…</Heading><Heading as='h2' size='2xl'>It is my hope that this work will be indelibly associated with the Indian movement and ideals, but also that the worth of the work itself shall rise above all political emotions of this epoch.</Heading>
                <Heading as='h3' size='md'>
                —Louis Ballard, program note for Incident at Wounded Knee, performed at Carnegie Hall, 1999
                </Heading>
                </VStack>
            </HStack>
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