import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import '../styles/helpers/_email.scss';


const Email = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_08rxatq', 'template_kuciwn8', form.current, 'user_GrhN8LXPa90WgUf9kWx6l')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset();
  };

  return (
    <form ref={form} onSubmit={sendEmail} className = 'form'>
      <label>Name</label>
      <input type="text" name="user_name" />

      <label>Email</label>
      <input type="email" name="user_email" />

      <label>Message</label>
      <textarea name="message" className = 'form__textarea'/>

      <input type="submit" value="Send" className = 'btn--primary'/>
    </form>
  );
};

export default Email;
