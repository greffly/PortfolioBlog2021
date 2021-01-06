import React from 'react';
import PropTypes from 'prop-types';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import { Helmet } from 'react-helmet';
import 'fontsource-raleway/300.css';
import 'fontsource-bellota-text/300.css';
import 'fontsource-montserrat/300.css';
import 'fontsource-source-sans-pro/300.css';
import './layout.css';

const Layout = ({ children }) => (
  <div className='layout'>
    <Helmet>
      <html lang='en' />
      <title>Caitlyn Greffly</title>
      <meta
        name='Title'
        property='og:title'
        content="Caitlyn Greffly's Website and Blog"
      />
      <meta
        name='description'
        property='og:description'
        content='Full Stack Web Developer out of Portland, Oregon'
      />
      <meta name='author' content='Caitlyn Greffly' />
      <meta name='twitter:title' content='Caitlyn Greffly' />
    </Helmet>
    <Nav />
    <main className='main'>{children}</main>
    <Footer />
  </div>
);

if (typeof window !== 'undefined') {
  // eslint-disable-next-line global-require
  require('smooth-scroll')('a[href*="#"]');
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
