import React from 'react'
import LWB from '../assets/lwb_1.jpg'
import {
    VStack, 
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
        <Stack w="full" h="full" p={10} spacing={10} alignItems="flex-start">
            <Stack spacing={3} alignItems="flex-start">
                <Heading as='h2' size='2xl'>
                Music history </Heading><Heading as='h3' size='lg'>is replete with examples of composers who championed the cause of </Heading><Heading as='h2' size='2xl'>oppressed people. Composers </Heading><Heading as='h3' size='lg'>and their music sustained the spirit of their people at a time of foreign cultural attack and domination. Dvořák, in 1893, predicted that America should have a form of nationalistic music</Heading><Heading as='h2' size='2xl'>built upon Indian music and black slave songs.</Heading><Heading as='h3' size='lg'>So I felt that I was in good company when I took up my pen to express the sufferings of my people, their regeneration and hopes for a better future life…</Heading><Heading as='h2' size='2xl'>It is my hope that this work will be indelibly associated with the Indian movement and ideals, but also that the worth of the work itself shall rise above all political emotions of this epoch.</Heading>
                <Heading as='h3' size='lg'>
                —Louis Ballard, program note for Incident at Wounded Knee, performed at Carnegie Hall, 1999
                </Heading>
                
                {/* <Box boxSize='sm'>
                <Heading size="2x1">In memory of Louis W. Ballard | 1931-2007</Heading>
                <Text>Ballard is widely recognized as the "grandfather of Native American classical music" and was one of the premier classical music composers of the 20th century. This site is set up and maintained by his family to honor his unique legacy and continue celebrating his pioneering spirit.</Text>
                </Box> */}
            </Stack>
        </Stack>
        </div>
    </div>
    )
}

export default Home
