import React from 'react';
import { Link } from 'gatsby';
import './layout.css';
import './footer.css';

const Footer = () => (
  <footer>
    <div className='createdBy'>Created by Caitlyn Greffly</div>
    <ul className='footer'>
      <li>
        <a>
          <img src='/images/maillogo.png' alt='Email' className='icon' />
        </a>
      </li>
      <li>
        <a href='https://github.com/greffly' target='_blank' rel='noreferrer'>
          <img src='/images/githublogo.png' alt='GitHub' className='icon' />
        </a>
      </li>
      <li>
        <a
          href='https://twitter.com/thecaitcode'
          target='_blank'
          rel='noreferrer'
        >
          <img src='/images/twitterlogo.png' alt='Twitter' className='icon' />
        </a>
      </li>
      <li>
        <a
          href='https://www.linkedin.com/in/caitlyngreffly/'
          target='_blank'
          rel='noreferrer'
        >
          <img src='/images/linkedinlogo.png' alt='Linkedin' className='icon' />
        </a>
      </li>
    </ul>
    <section className='displayInfo' role='contentinfo'></section>
  </footer>
);

export default Footer;
