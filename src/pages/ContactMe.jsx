import React, { useState, useRef } from 'react';
import emailjs from 'emailjs-com';

function ContactMe() {
  const form = useRef();

  const [messageSent, setMessageSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Use sendForm and pass in the form reference
    emailjs.sendForm('service_izm4gbj', 'template_azkfkac', form.current, 'NCh1TXiIkDVtP_w8p')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setMessageSent(true);
        // Reset the form fields manually if needed
        e.target.reset(); // Clear form fields
      })
      .catch((err) => {
        console.error('FAILED...', err);
      });
  };

  return (
    <div class="container-border">
      <h1>Contact Me</h1>
      <p>If you would like to get in touch, please fill out the form below.</p>
      <div class="centered-container">

        {messageSent && <p>Your message has been sent!</p>}

        <form ref={form} onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="from_name"
              required
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="from_email"
              required
            />
          </div>
          <div>
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              required
            />
          </div>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default ContactMe;
