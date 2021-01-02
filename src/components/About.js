import React from 'react';
import Layout from './Layout';

const About = () => (
  <section id='about' className='aboutPage' role='contentinfo'>
    <div className='outline'>
      <p>
        In 2019 I made a bold career move from selling beer to being a software
        engineer. I got lucky, because not only do I love the work, but I love
        writing about it, talking about it, and encouraging others to make their
        own bold career changes.
      </p>
      <br />
      <p>
        I'm always happy to talk, partially because I'm passionate about tech
        and alternate career paths, and partially because I am a social
        extrovert.
      </p>
    </div>
    <div className='outline'>
      <br />
      <p>
        I recently gave a talk at Donut.js about{' '}
        <a
          href='https://www.youtube.com/watch?v=emZGYOD_z_c'
          className='speakerLinks'
          target='_blank'
          rel='noreferrer'
        >
          How to Support the Junior Dev on Your Team
        </a>
        . It's a subject I feel pretty passionate about.
      </p>
      <p>
        I did a talk on{' '}
        <a
          href='https://www.youtube.com/watch?v=mOLx5BTCAck'
          className='speakerLinks'
          target='_blank'
          rel='noreferrer'
        >
          Why Not Having a CS Degree is Awesome
        </a>{' '}
        for 300 Seconds.
      </p>
      <p>
        I also did an interview on the Learn To Code With Me Podcast about
        making an{' '}
        <a
          href='https://www.youtube.com/watch?v=u4X0L1H6hR4'
          className='speakerLinks'
          target='_blank'
          rel='noreferrer'
        >
          Unexpected Shift from Selling Beer to Coding Bootcamp.
        </a>
      </p>
      <p>
        You can find most of my blog posts living at{' '}
        <a
          href='https://dev.to/thecaitcode'
          className='speakerLinks'
          target='_blank'
          rel='noreferrer'
        >
          dev.to
        </a>
        , where I was a top contributor in 2019.
      </p>
    </div>
  </section>
);

export default About;
