import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import '../styles/ContactForm.css';
import { Box } from '@chakra-ui/react';
import { Buttons } from '../components'

const ContactForm = () => {
  const [mailerState, setMailerState] = useState({
    name: "",
    email: "",
    message: "",
    // permission: [],
    // research: [],
    // info: [],
  });

  let history = useHistory();

// might need to add more here for the checkboxes state*
  function handleStateChange(e) {
    setMailerState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  }

  // function handleClick() {
  //   history.push('/thankyou');
  // }

  const submitEmail = async (e) => {
    e.preventDefault();
    console.log({ mailerState });
    const response = await fetch("http://localhost:3001/send", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ mailerState }),
    })
      .then((res) => res.json())
      .then(async (res) => {
        const resData = await res;
        console.log(resData);
        if (resData.status === "success") {
          alert("Message Sent");
        } else if (resData.status === "fail") {
          alert("Message failed to send");
        }
      })
      .then(() => {
        setMailerState({
          email: "",
          name: "",
          message: "",
        });
      });
  };

  return (
    <div className="container">
    <form onSubmit={submitEmail}>
      <div className="contents">
        <div>
        <label htmlFor="name">Name:</label>
        <input 
          onChange={handleStateChange}
          name="name"
          value={mailerState.name}
          required 
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input 
          onChange={handleStateChange}
          name="email"
          value={mailerState.email}
          required 
        />
      </div>
      <div>
        <label htmlFor="message">Message:</label>
        <textarea 
          onChange={handleStateChange}
          name="message"
          value={mailerState.message}
          required 
        />
      </div>
      {/* <div className="checkboxes">
        <div className="check">
            <input 
              type="checkbox"
              placeholder="Permission" 
              onChange={handleStateChange} 
              name="permission"
              value={mailerState.permission}
            />
            <label htmlFor="permission">Permission to play</label>
        </div>
        <div className="check">
            <input 
              type="checkbox"
              placeholder="Research" 
              onChange={handleStateChange} 
              name="research"
              value={mailerState.research}
            />
            <label htmlFor="research">Academic research</label>
        </div>
        <div className="check">
        <input 
              type="checkbox"
              placeholder="Info" 
              onChange={handleStateChange} 
              name="info"
              value={mailerState.info}
            /> */}
            {/* <label htmlFor="info">General inquiry</label>
        </div>
      </div> */}
      <Box style={{ marginTop: '15%', marginLeft: '45%' }}>
      <Buttons 
        type="submit"
        text="Send"
        >
        </Buttons>
        </Box>
      </div>
    </form>
    </div>
  );
};

export default ContactForm;
