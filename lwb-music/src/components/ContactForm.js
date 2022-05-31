import React, { useState } from "react";
import { send } from 'emailjs-com';
import { useHistory } from "react-router-dom";

import '../styles/ContactForm.css';

import { 
  Box,
  Button,
  Input,
  Textarea 
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

  return (
    <form onSubmit={onSubmit}>
      <Box h='15vh'>
      <Input 
                type='text'
                name='user_name'
                placeholder='Name'
                value={toSend.user_name}
                onChange={handleChange}
                maxLength='30'
            />
            <br></br>
      </Box>
      <Box h='15vh'>
      <Input
                type='email'
                name='user_email'
                placeholder='Email'
                value={toSend.user_email}
                onChange={handleChange}
                maxLength='50'
            />
            <br></br>
      </Box>
      <Box h='15vh'>
      <Textarea
                name='message'
                placeholder='Tell us your favorite color'
                value={toSend.message}
                onChange={handleChange}
                maxLength='500'
            />
            <br></br>
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
