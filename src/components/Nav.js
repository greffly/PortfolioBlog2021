import React from 'react';
import { Link } from 'gatsby';
import './nav.css';

function Nav() {
  // const menuButton = document.querySelector('.menuButton');
  // const menu = document.querySelector('.menu');
  // const menuNav = document.querySelector('.navigationBar');
  // const navItems = document.querySelectorAll('.navItem');

  // let showMenu = false;
  // menuButton.addEventListener('click', toggleMenu);

  // function toggleMenu() {
  //   if (!showMenu) {
  //     menuButton.classList.add('close');
  //     menu.classList.add('show');
  //     menuNav.classList.add('show');
  //     navItems.forEach((item) => item.classList.add('show'));
  //     showMenu = true;
  //   } else {
  //     menuButton.classList.remove('close');
  //     menu.classList.remove('show');
  //     menuNav.classList.remove('show');
  //     navItems.forEach((item) => item.classList.remove('show'));
  //     showMenu = false;
  //   }
  // }

  // $('nav')
  //   .find('.pageLink')
  //   .click(function(e) {
  //     menuButton.classList.remove('close');
  //     menu.classList.remove('show');
  //     menuNav.classList.remove('show');
  //     navItems.forEach((item) => item.classList.remove('show'));
  //     showMenu = false;
  //     let section = $(this).attr('href');
  //     $('html, body').animate({
  //       scrollTop: $(section).offset().top,
  //     });
  //   });

  return (
    <div>
      <div class='navBarMobile'>
        <div class='menuButton'>
          <div class='btn-line'></div>
          <div class='btn-line'></div>
          <div class='btn-line'></div>
        </div>
      </div>
      <nav className='menu'>
        <ul className='navigationBar'>
          <li className='navItem'>
            <Link to='/'>Home</Link>
          </li>
          <li className='navItem'>
            <Link to='/#about'>About</Link>
          </li>
          <li className='navItem'>
            <Link to='/blog'>Blog</Link>
          </li>
          <li class='navItem'>
            <a
              href='CaitlynGrefflyResume.pdf'
              class='resumeLink'
              target='_blank'
              rel='noopener'
            >
              Resume
            </a>
          </li>
          <li className='navItem'>
            <Link to='/#contact'>Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
