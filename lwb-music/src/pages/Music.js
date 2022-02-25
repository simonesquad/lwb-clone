import React from 'react'
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
import Decoy from '../assets/santafe colors.png';

function Music() {
    return (
        <Stack>
            <VStack 
                divider={<StackDivider borderColor='gray.200' />}
                spacing={1}
                align='center'
            >

                <HStack w='100vw' h='60vh' spacing='70px'>
                <VStack 
                    align='center'
                >
                <Box w='40vw' h='50vh' margin-left='5px' style={{ margin: '35px' }}>
                    <Heading as='h3' size='md'>Incident at Wounded Knee</Heading>
                    <Text></Text>
                </Box>
                </VStack>
                </HStack>

                <HStack w='100vw' h='60vh' spacing='70px'>
                <VStack 
                    align='center'
                >
                <Box w='40vw' h='50vh' margin-left='5px' style={{ margin: '35px' }}>
                    <Heading as='h3' size='md'>Katcina Dances</Heading>
                    <Text></Text>
                </Box>
                </VStack>
                </HStack>

                <HStack w='100vw' h='60vh' spacing='70px'>
                <VStack 
                    align='center'
                >
                <Box w='40vw' h='50vh' margin-left='5px' style={{ margin: '35px' }}>
                    <Heading as='h3' size='md'>Four American Indian Preludes</Heading>
                    <Text></Text>
                </Box>
                </VStack>
                </HStack>

                <HStack w='100vw' h='60vh' spacing='70px'>
                <VStack 
                    align='center'
                >
                <Box w='40vw' h='50vh' margin-left='5px' style={{ margin: '35px' }}>
                    <Heading as='h3' size='md'>Why the Duck Has a Short Tail</Heading>
                    <Text></Text>
                </Box>
                </VStack>
                </HStack>

                <HStack w='100vw' h='60vh' spacing='70px'>
                <VStack 
                    align='center'
                >
                <Box w='40vw' h='50vh' margin-left='5px' style={{ margin: '35px' }}>
                    <Heading as='h3' size='md'>Ritmo Indio</Heading>
                    <Text></Text>
                </Box>
                </VStack>
                </HStack>

                <HStack w='100vw' h='60vh' spacing='70px'>
                <VStack 
                    align='center'
                >
                <Box w='40vw' h='50vh' margin-left='5px' style={{ margin: '35px' }}>
                    <Heading as='h3' size='md'>Fire Moon String Quartet</Heading>
                    <Text></Text>
                </Box>
                </VStack>
                </HStack>

                <HStack w='100vw' h='60vh' spacing='70px'>
                <VStack 
                    align='center'
                >
                <Box w='40vw' h='50vh' margin-left='5px' style={{ margin: '35px' }}>
                    <Heading as='h3' size='md'>Music for Earth and Sky</Heading>
                    <Text></Text>
                </Box>
                </VStack>
                </HStack>

                <HStack w='100vw' h='60vh' spacing='70px'>
                <VStack 
                    align='center'
                >
                <Box w='40vw' h='50vh' margin-left='5px' style={{ margin: '35px' }}>
                    <Heading as='h3' size='md'>Will Rogers: Tribute to a Great American</Heading>
                    <Text></Text>
                </Box>
                </VStack>
                </HStack>

                <HStack w='100vw' h='60vh' spacing='70px'>
                <VStack 
                    align='center'
                >
                <Box w='40vw' h='50vh' margin-left='5px' style={{ margin: '35px' }}>
                    <Heading as='h3' size='md'>The Four Moons</Heading>
                    <Text></Text>
                </Box>
                </VStack>
                </HStack>

                <HStack w='100vw' h='60vh' spacing='70px'>
                <VStack 
                    align='center'
                >
                <Box w='40vw' h='50vh' margin-left='5px' style={{ margin: '35px' }}>
                    <Heading as='h3' size='md'>Desert Triology</Heading>
                    <Text></Text>
                </Box>
                </VStack>
                </HStack>

            </VStack>
        </Stack>
    )
}

export default Music
