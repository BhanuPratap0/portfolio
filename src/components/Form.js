import React, { useRef, useState } from 'react'
import './form.css'
import emailjs from '@emailjs/browser';
const Form = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const SERVICE_ID = "service_2cc1u4u"
  const TEMPLATE_ID = "template_vpas47d"
  const PUBLIC_KEY = "R9jaw-HQbZE00tonU"

  const form = useRef();
  console.log(SERVICE_ID)
  const sendEmail = (e) => {
    setError(false);
    setSuccess(false);
    e.preventDefault();

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, {
        publicKey: PUBLIC_KEY,
      })
      .then(
        () => {
          setSuccess(true);
          form.current.reset();
          console.log('SUCCESS!');
        },
        (error) => {
          setError(true);
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div>
      <section id="contact">
        <h1 class="section-header">Contact</h1>
        <div class="contact-wrapper">

          <form ref={form} onSubmit={sendEmail} class="contact-form" role="form">
            <span>Dear Bhanu Dev,</span>
            <textarea class="form-txtarea" rows="10" placeholder="MESSAGE" name="user_message" required></textarea>
            <span>My mail address is:</span>
            <input type="email" id="email" placeholder="EMAIL" name="user_email" required />

            <button class="btn btn-primary send-button" id="submit" type="submit" value="SEND">
              <div class="alt-send-button">
                <i class="fa fa-paper-plane"></i><span class="send-text">SEND</span>
              </div>
            </button>
            <div style={{ textAlign: 'center' }}>
              {success && <span className='succ-text'>Your message has been sent Successfully!</span>}
              {error && <span className='error-text'>Something went wrong!</span>}
            </div>
          </form>

          <div class="direct-contact-container">
            <ul class="contact-list">
              <li class="list-item"><i class="fa fa-map-marker fa-2x"><span class="contact-text place">Ajmer, Rajasthan</span></i></li>

              <li class="list-item"><i class="fa fa-phone fa-2x"><span class="contact-text phone"><a href="" title="Give me a call">xx xxxxxxxxxx</a></span></i></li>

              <li class="list-item"><i class="fa fa-envelope fa-2x"><span class="contact-text gmail"><a href="mailto:#" title="Send me an email">singh28986@gmail.com</a></span></i></li>
            </ul>
            <hr />
            <ul class="social-media-list">
              <a href="https://github.com/BhanuPratap0" target="_blank" class="contact-icon"><li>
                <i class="fa fa-github" aria-hidden="true"></i>
              </li></a>
              <a href="https://codepen.io/BhanuPratap0" target="_blank" class="contact-icon"><li>
                <i class="fa fa-codepen" aria-hidden="true"></i>
              </li></a>
              <a href="https://twitter.com/bunny28986" target="_blank" class="contact-icon"><li>
                <i class="fa fa-twitter" aria-hidden="true"></i>
              </li></a>
              <a href="https://www.instagram.com/_iambhanu/" target="_blank" class="contact-icon"><li>
                <i class="fa fa-instagram" aria-hidden="true"></i>
              </li></a>
            </ul>
            <hr />
          </div>
        </div>
      </section>


    </div>
  )
}

export default Form
