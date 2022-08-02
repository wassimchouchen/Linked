import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

import "./ContactForm.css";

const Contactme = (props) => {
 
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_3mo901c', 'template_wgmi3xs', form.current,'yWiwwr4f7ICAjvDBZ' )
      .then((result) => {
          console.log(result.text);
          alert("Message sent successfully");
      }, (error) => {
          console.log(error.text);
          console.log('ERROR! ')
      });
  };
   return (

 
        <form id="form" class="topBefore" ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" id="name" placeholder="NAME" name="to_name" />
      <label>Email</label>
      <input type="email" id="email" placeholder="E-MAIL" name="from_name" />
      <label>Message</label>
      <textarea name="message" id="message" placeholder="MESSAGE" />
      <input type="submit" value="Send" />
    </form>
    
  )
}

export default Contactme;
