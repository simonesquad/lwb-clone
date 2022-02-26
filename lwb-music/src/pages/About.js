import React from 'react'
import School from '../assets/seneca_ndns.png';
import Flute from '../assets/lwb_flute.png';

import  {
    Stack,
    HStack,
    VStack,
    Box,
    Image,
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
                <HStack w='100vw' h='60vh' spacing='70px'>
                <Box w='50vw' h='50vh' borderWidth='1px' borderRadius='sm' overflow='hidden' >
                <Image src={School} alt="boarding-school-image" width={550} height={350}/>
                </Box>
                <VStack>
                <Box w='40vw' h='50vh'>
                <Heading as='h3' size='xl'>Humble Beginnings:</Heading>
                <Heading as='h5' size='md'>"Kill the Indian in Him and Save the Man"</Heading>
                <Text>Louis was born to Quapaw and Cherokee parents near Devils Promenade, Oklahoma on July 8, 1931. He attended the Seneca Indian Boarding School that was located in Wyandotte, Oklahoma from the age of six. Boys at the school were taught carpentry and farm management. The school was initially founded in the 1870s by Quakers as a mission. The general purpose of all Indian boarding schools was to remove children from their traditional customs and assimilate them into the predominant European culture. Louis resisted the strict indoctrination techniques and contiuned to speak his native Quapaw language and practice native dances. He was punished for doing so, but left the school retaining his culture and language.</Text>
                </Box>
                </VStack>
                </HStack>

                <HStack w='100vw' h='60vh' spacing='70px'>
                <VStack 
                    align='center'
                >
                <Box w='40vw' h='50vh' margin-left='5px' style={{ margin: '35px' }}>
                    <Heading as='h3' size='xl'>Finding His Voice:</Heading>
                    <Heading as='h5' size='md'>"The Cultural Milieu and American Indian Music"</Heading>
                    <Text>Parturient montes nascetur ridiculus mus mauris vitae ultricies. Amet justo donec enim diam vulputate. Lacus sed turpis tincidunt id aliquet risus. Lorem ipsum dolor sit amet. Lorem mollis aliquam ut porttitor leo a diam sollicitudin tempor. Tempor orci eu lobortis elementum nibh. Justo laoreet sit amet cursus. Auctor augue mauris augue neque gravida in fermentum et. Tristique senectus et netus et malesuada. Aliquet lectus proin nibh nisl condimentum id venenatis. Id aliquet risus feugiat in ante metus. Adipiscing elit pellentesque habitant morbi tristique senectus et netus et. Enim blandit volutpat maecenas volutpat blandit aliquam etiam. Arcu dui vivamus arcu felis. Ornare aenean euismod elementum nisi quis eleifend quam adipiscing. Adipiscing bibendum est ultricies integer. Et netus et malesuada fames ac turpis egestas.</Text>
                </Box>
                </VStack>
                <Box w='50vw' h='50vh' borderWidth='1px' borderRadius='sm' overflow='hidden'>
                <Image src={Flute} alt="lwb-holding-flute-image" width={550} height={350} style={{ margin: '20px' }} />
                </Box>
                </HStack>
            </VStack>
        </Stack>
    )
}

export default About
