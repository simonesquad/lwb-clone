import React from 'react'
import School from '../assets/seneca_ndns.png';
import Flute from '../assets/lwb_flute.png';

import  {
    Stack,
    HStack,
    VStack,
    Box,
    Heading,
    Text,
    StackDivider,
} from '@chakra-ui/react';

function About() {
    return (
        <Stack>
            <VStack 
                divider={<StackDivider borderColor='gray.200' />}
                spacing={1}
                align='center'
            >

                <HStack w='80vw' h='70vh' spacing='70px'>
                <VStack 
                    align='center'
                >
                <Box w='100vw' style={{ margin: '5px' }}>
                <Box h= '7vh'>
                <Heading as='h3' size='xl'>Humble Beginnings</Heading>
                </Box>
                <Box h='5vh'>
                <Heading as='h5' size='md'>"Kill the Indian in Him and Save the Man"</Heading>
                </Box>
                <Text>Louis Wayne Ballard was born on July 8th, 1931 in Devil’s Promenade, Oklahoma, close to Miami, Oklahoma today. His mother was Leona Mae Quapaw of the Quapaw tribe of Oklahoma and his father was Charles Guthrie “Smokey” Ballard of the Cherokee tribe of Oklahoma. His Quapaw lineage traces back to a prominent traditional medicine family and his Cherokee lineage to the chief’s line. His mother spoke her native tongue and Ballard himself was one of the last born native speakers of the Quapaw language. At only the age of six, Ballard was sent to the Seneca Indian Training School, one of the infamous government operated boarding schools for native children across the U.S. at the time. The official mission of these schools was to assimilate Native American children into American society and give them useful trades after tribes had been forced to resettle all over the country under varying conditions. </Text>
                </Box>
                <Box w='100vw' style={{ margin: '10px' }}>
                    <Text>
                    Ballard from an early age resisted the dominant narrative. While the boarding school did provide him some foundational education, he felt that it was really a: “brainwashing center for young Indians.” He was punished for speaking his native tongue and practicing traditional dances. The institutionalized cultural genocide tactics would come to be recognized by the greater society as detrimental much later on in his lifetime. After boarding school, Ballard spent several years living on the reservation with his grandmother and brother while attending church and local dances. His grandmother encouraged his interest in music early on and paid for his first piano and voice lessons through the church. He really started to flourish towards the end of high school, when piano became a constant in his life. 
                    </Text>
                </Box>
                </VStack>
                </HStack>

                <HStack w='80vw' h='70vh' spacing='70px'>
                <VStack 
                    align='center'
                >
                <Box w='100vw' style={{ margin: '5px' }}>
                <Box h= '7vh'>
                <Heading as='h3' size='xl'>Oklahoma Roots</Heading>
                </Box>
                <Box h='5vh'>
                <Heading as='h5' size='md'>"Walking in Two Worlds"</Heading>
                </Box>
                <Text>After doing well towards the end of high school, Ballard decided to continue his studies first at the University of Oklahoma, then switching to Northeastern Oklahoma A & M, and finally deciding on the University of Tulsa. He graduated with a B.M. in Music Theory and a B.M.E. in music education in 1954. This is where he studied piano under Stefan Bardos and received his first formal education in composition from the Hungarian Béla Rózsa. In undergraduate, Ballard was exposed to the Hungarian folk music of Béla Bartók. This would prove to be a huge influence for him and start leading him towards the path of wanting to “combine two worlds” in his music. In one of his early educational assignments, he arranged a traditional Ponca Indian melody in the style of Chopin and Rachmaninoff.</Text>
                </Box>
                <Box w='100vw' style={{ margin: '10px' }}>
                    <Text>
                    Ballard didn’t only leave school with a degree. He also met his first wife, Dolores Lookout, on a blind date in 1953. Dolores was a member of the Osage tribe of Oklahoma and descended from one of their ruling lines. By the time they met she was already working in the area as a nurse. Ballard already started working in music during his undergraduate studies by singing with the Tulsa University Radio Choir and serving as a music director for several local high schools and churches. After teaching piano privately post-graduation, he continued his education and in 1962 he became the first Native American to receive a graduate degree in composition. This degree was also from the University of Tulsa where he had continued studying under Béla Rózsa.
                    </Text>
                </Box>
                </VStack>
                </HStack>

                
            </VStack>
        </Stack>
    )
}

export default About
