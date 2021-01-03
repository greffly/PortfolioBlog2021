import React from 'react';
import './about.css';

const About = () => (
  <section id='about' className='aboutPage' role='contentinfo'>
    <div className='aboutSection'>
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
    <div className='aboutSection'>
      <br />
      <div className='talkSection'>
        <h2 className='aboutTitle'>Talks</h2>
        <div className='underline'></div>
        <ul className='aboutList'>
          <li>
            I gave a talk on{' '}
            <a
              href='https://youtu.be/Xul4dWFMZm0?t=1417'
              className='speakerLinks'
              target='_blank'
              rel='noreferrer'
            >
              An Intro to AWS
            </a>{' '}
            for Collab Lab, an non-profit that helps early career developers.
          </li>
          <li>
            I lead and spoke on a panel at the 2020 ACT-W about{' '}
            <a
              href='https://plus.act-w.org/act-w-2020-transitioning-into-a-dev-job-from-less-traditional-pathways'
              className='speakerLinks'
              target='_blank'
              rel='noreferrer'
            >
              Transitioning Into a Dev Job from Less Tradtitional Pathways.
            </a>
          </li>
          <li>
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
          </li>
          <li>
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
          </li>
        </ul>
      </div>
      <div className='podcastSection'>
        <h2 className='aboutTitle'>Podcasts</h2>
        <div className='underline'></div>
        <ul className='aboutList'>
          <li>
            I did an interview on the Learn To Code With Me podcast about making
            an{' '}
            <a
              href='https://www.youtube.com/watch?v=u4X0L1H6hR4'
              className='speakerLinks'
              target='_blank'
              rel='noreferrer'
            >
              Unexpected Shift from Selling Beer to Coding Bootcamp.
            </a>
          </li>
          <li>
            I did an interview on the Develomentor podcast about my bootcamp
            experience and how I went{' '}
            <a
              href='https://www.listennotes.com/podcasts/develomentor/caitlyn-greffly-from-beer-ySECtNcg4qA/'
              className='speakerLinks'
              target='_blank'
              rel='noreferrer'
            >
              From Beer Sales to Coding via Thinkful Bootcamp.
            </a>
          </li>
          <li>
            I did an interview on the FIRE Drill podcast about increasing my
            career and income potential, and{' '}
            <a
              href='https://firedrillpodcast.com/2019/11/27/how-i-transitioned-my-career-into-tech-with-a-coding-bootcamp-caitlyn/'
              className='speakerLinks'
              target='_blank'
              rel='noreferrer'
            >
              How I Transitioned My Career into Tech with a Coding Bootcamp.
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div className='reachOutBlurb'>
      If you would like to chat about me coming on your podcast or speaking at
      an event, send me an email at cgreffly@gmail.com or shoot me a message on
      Twitter!
    </div>
  </section>
);

export default About;
