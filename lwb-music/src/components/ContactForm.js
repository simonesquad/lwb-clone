import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import '../styles/ContactForm.css';

const ContactForm = () => {
  const [status, setStatus] = useState("Send");

  let history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, message, permission, research, info } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
      permission: permission.value,
      research: research.value,
      info: info.value
    };
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    alert(result.status);
    history.push('/thankyou')
  };

  return (
    <div className="container">
    <form onSubmit={handleSubmit}>
      <div className="contents">
        <div>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" required />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" required />
      </div>
      <div>
        <label htmlFor="message">Message:</label>
        <textarea id="message" required />
      </div>
      <div className="checkboxes">
        <div className="check">
            <input type="checkbox" value="yes" id="permission"/>
            <label htmlFor="permission">Permission to play</label>
        </div>
        <div className="check">
            <input type="checkbox" value="yes" id="research"/>
            <label htmlFor="research">Academic research</label>
        </div>
        <div className="check">
            <input type="checkbox" value="yes" id="info" />
            <label htmlFor="info">General inquiry</label>
        </div>
      </div>
      <button type="submit">{status}</button>
      </div>
    </form>
    </div>
  );
};

export default ContactForm;
