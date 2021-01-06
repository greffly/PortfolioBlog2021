import React, { useState } from 'react';
import './contact.css';

function Contact() {
  const [showEmail, setShowEmail] = useState(false);

  return (
    <div className='contactSection' id='contact'>
      <h2 className='contactTitle'>Get in Touch</h2>
      <p className='reachOutBlurb'>
        I'm always happy to talk, partially because I'm passionate about tech
        and alternate career paths, and partially because I am a social
        extrovert. If you'd like to chat about what it's like to go through a
        bootcamp, ask me to speak at an event or on a podcast, or you just want
        to say hey - send me{' '}
        <a href='#!' className='contactLink' onClick={() => setShowEmail(true)}>
          an email
        </a>{' '}
        {showEmail ? <span>at cgreffly@gmail.com </span> : ''}
        or shoot me a message on{' '}
        <a
          href='https://twitter.com/thecaitcode'
          className='contactLink'
          target='_blank'
          rel='noreferrer'
        >
          Twitter
        </a>
        !
      </p>
    </div>
  );
}

export default Contact;
