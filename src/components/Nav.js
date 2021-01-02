import React from 'react';
import { Link } from 'gatsby';
import './layout.css';
import './nav.css';

const Nav = () => (
  <nav className='menu'>
    <ul className='navigationBar'>
      <li className='navItem'>
        <Link
          activeStyle={{ color: '#FFECDB', borderBottom: '2px solid #FFECDB' }}
          to='/'
        >
          HOME
        </Link>
      </li>
      <li className='navItem'>
        <Link
          activeStyle={{ color: '#FFECDB', borderBottom: '2px solid #FFECDB' }}
          to='/#about'
        >
          ABOUT
        </Link>
      </li>
      <li className='navItem'>
        <Link
          activeStyle={{ color: '#FFECDB', borderBottom: '2px solid #FFECDB' }}
          to='/blog'
        >
          BLOG
        </Link>
      </li>
      <li className='navItem'>
        <Link
          activeStyle={{ color: '#FFECDB', borderBottom: '2px solid #FFECDB' }}
          to='/contact'
        >
          CONTACT
        </Link>
      </li>
    </ul>
  </nav>
);

export default Nav;
