import React from 'react';
import ContactForm from '../components/ContactForm';

import {
    Box,
    Stack,
} from '@chakra-ui/react';
import { createBreakpoints } from '@chakra-ui/theme-tools';

const breakpoints = createBreakpoints({
    sm: '30em',
    md: '48em',
    lg: '62em',
    xl: '80em',
    '2xl': '96em',
  })

function Contact() {
    return (
        <Stack
        h={{
            sm: '80vh',
            lg: '100vh'
        }}
        w='100%'
    >
        <Box
            w={{
                sm: '65vw',
                md: '55vw',
                lg: '45vw'
            }}
            marginLeft={{
                sm: '17%',
                md: '15%',
                lg: '25%'
            }}
            marginTop='10%'
        >
            <ContactForm />
            </Box>
        </Stack>
    )
}

export default Contact
