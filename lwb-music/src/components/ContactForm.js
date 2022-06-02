import React, { useState } from "react";
import { send } from 'emailjs-com';
import { useHistory } from "react-router-dom";

import '../styles/ContactForm.css';

import { 
  Box,
  Button,
  Input,
  Textarea,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from '@chakra-ui/react';
import { createBreakpoints } from '@chakra-ui/theme-tools';

const breakpoints = createBreakpoints({
    sm: '30em',
    md: '48em',
    lg: '62em',
    xl: '80em',
    '2xl': '96em',
  })

const ContactForm = () => {
  const history = useHistory();
  const [toSend, setToSend] = useState({
      user_name: '',
      user_email: '',
      message: '',
  });

  const onSubmit = (e) => {
      e.preventDefault();
      send(
          'service_jqkz3qr',
          'template_kqymnmk',
          toSend,
          'user_jMWnlaeLAc6VuXUX6i7eh'
      )
      .then((response) => {
          console.log('SUCCESS!', response.status, response.text);
          history.push("/thankyou")
      })
      .catch((err) => {
          console.log('FAILED...', err);
      });
  };

  const handleChange = (e) => {
      setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  const isError = toSend === ''

  return (
    <form onSubmit={onSubmit}>
      <Box h='15vh'>
        <FormControl isRequired>
            <FormLabel htmlFor='name'>Name</FormLabel>
            <Input    
                id='name'
                type='text'
                name='user_name'
                placeholder='Anastasia Smith'
                _placeholder={{ color: 'grey' }}
                value={toSend.user_name}
                onChange={handleChange}
                maxLength='30'
            />
        </FormControl>
      </Box>

      <Box h='15vh'>
        <FormControl isRequired>
            <FormLabel htmlFor='email'>Email address</FormLabel>
            <Input
                type='email'
                name='user_email'
                placeholder='asmith@hotmail.com'
                _placeholder={{ color: 'grey' }}
                value={toSend.user_email}
                onChange={handleChange}
                maxLength='50'
            />
        </FormControl>
      </Box>
      <Box h='15vh'>
        <FormControl isRequired>
            <FormLabel htmlFor='message'>Message</FormLabel>
            <Textarea
                name='message'
                placeholder='Tell us your favorite color'
                _placeholder={{ color: 'grey' }}
                value={toSend.message}
                onChange={handleChange}
                maxLength='500'
            />
        </FormControl>
      </Box>
      <Box
            marginTop='12%' 
            marginLeft={{
                sm: '27%',
                md: '31%',
                lg: '35%'
            }}
        >
        <Button
            colorScheme='blackAlpha'
            w={{
                sm: '25vw',
                md: '21vw',
                lg: '12vw'
            }}
            h='6vh'
            type="submit" 
        >
            Send
        </Button>
        </Box>
    </form>
  );
};

export default ContactForm;
