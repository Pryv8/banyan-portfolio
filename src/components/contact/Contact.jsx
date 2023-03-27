import React from 'react'
import { useRef } from 'react';
import emailjs from 'emailjs-com'
import './contact.css'
import {SiGmail} from 'react-icons/si'
import{RiMessengerLine} from 'react-icons/ri'
import{BsWhatsapp} from 'react-icons/bs'

const Contact = () => {
  const form = useRef();


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_6s87wbs', 'template_obi7l9q', form.current, 'j4Dnrh_EguNguehIv')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };
  return (
    <section id='contact'>
    <h5>Get In Touch</h5>
    <h2>Contact Me</h2>
    <div className="container contact_container">
<div className="contact_options">


<article className="contact_option">
<SiGmail className="contact_option-icon"/>
<h4>Email</h4>
<h5>Pr1v8lane@gmail.com</h5>
<a href="mailto:Pr1v8lane@gmail.com" target="_blank" rel='noreferrer'>Send a message</a>
</article>

<article className="contact_option">
<RiMessengerLine className="contact_option-icon"/>
<h4>Messenger</h4>
<h5>Dev.Gilmore</h5>
<a href="https://m.me/100088874928268" target="_blank" rel='noreferrer'>Send a message</a>
</article>

<article className="contact_option">
<BsWhatsapp className="contact_option-icon"/>
<h4>WhatsApp</h4>
<h5>+123456789</h5>
<a href="https://api.whatsapp.com/send?phone+3526155552" target="_blank" rel='noreferrer'>Send a message</a>
</article>
    </div>
    {/* END OF CONTACT OPTIONS */}
    <form ref={form} onSubmit={sendEmail}>
<input type="text" name="name" placeholder='Your Full Name' required />
<input type="email" name="email" placeholder='Your Email' required/>
<textarea name="message" rows="7" placeholder='Your Message' required></textarea>
<button type='submit' className='btn btn-primary'>Send Message</button>

    </form>
    </div>
    </section>
  )
}

export default Contact
