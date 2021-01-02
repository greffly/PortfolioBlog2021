import React from 'react';
import PropTypes from 'prop-types';
import Nav from './Nav';
import Footer from './Footer';
import 'fontsource-raleway/300.css';
import 'fontsource-bellota-text/300.css';
import 'fontsource-montserrat/300.css';
import 'fontsource-source-sans-pro/300.css';
import './layout.css';

const Layout = ({ children }) => (
  <div className='layout'>
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
