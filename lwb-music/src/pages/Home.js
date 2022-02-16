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
                <Heading size="2x1">In memory of Louis W. Ballard | 1931-2007</Heading>
                <Box boxSize='sm'>
                    <Image src={LWB} alt='Louis picture' />
                </Box>
                <Text>Ballard is widely recognized as the "grandfather of Native American classical music" and was one of the premier classical music composers of the 20th century. This site is set up and maintained by his family to honor his unique legacy and continue celebrating his pioneering spirit.</Text>
            </Stack>
        </Stack>
        </div>
    </div>
    )
}

export default Home
