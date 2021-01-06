import React from 'react';
import Layout from '../components/Layout/Layout';
import About from '../components/About/About';

const Home = () => (
  <Layout>
    <section className='homePage' role='main' id='home'>
      <div className='overlay'>
        <hr width='85%' size='5' id='nav-line' />
        <hr width='80%' size='4' id='nav-line-2' />
        <div className='titleSection'>
          <h1 className='titleLine'>
            Caitlyn <br />
            Greffly
          </h1>
          <h2 className='tagline'>
            Software Engineer. Speaker. Community Enthusiast.
          </h2>
        </div>
      </div>
    </section>
    <About />
  </Layout>
);

export default Home;
