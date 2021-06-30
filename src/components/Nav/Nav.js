import React from 'react';
import { Link } from 'gatsby';
import './nav.css';
import ResumePdf from './CaitlynGrefflySoftwareEngineerResume.pdf';

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: true,
    };
  }

  navItem = 'navItem';
  menuButton = 'menuButton';
  menu = 'menu';
  navigationBar = 'navigationBar';

  handleMenuVisibility() {
    this.setState({ menuOpen: !this.state.menuOpen });
    if (this.state.menuOpen) {
      this.navItem = 'navItem show';
      this.menuButton = 'menuButton close';
      this.menu = 'menu show';
      this.navigationBar = 'navigationBar show';
      console.log('opening menu!', this.state.menuOpen);
    } else {
      this.navItem = 'navItem';
      this.menuButton = 'menuButton';
      this.menu = 'menu';
      this.navigationBar = 'navigationBar';
      console.log('closing!', this.navigationBar);
    }
  }

  handleLinkClick() {
    this.setState({ menuOpen: false });
    this.handleMenuVisibility();
  }

  render() {
    return (
      <div>
        <div className='navBarMobile'>
          <div
            className={this.menuButton}
            onClick={() => this.handleMenuVisibility()}
          >
            <div className='btn-line'></div>
            <div className='btn-line'></div>
            <div className='btn-line'></div>
          </div>
        </div>
        <nav className={this.menu} open={this.state.menuOpen}>
          <ul className={this.navigationBar}>
            <li className={this.navItem} onClick={() => this.handleLinkClick()}>
              <Link to='/'>Home</Link>
            </li>
            <li className={this.navItem} onClick={() => this.handleLinkClick()}>
              <Link to='/#about'>About</Link>
            </li>
            <li className={this.navItem} onClick={() => this.handleLinkClick()}>
              <Link to='/blog'>Blog</Link>
            </li>
            <li className={this.navItem} onClick={() => this.handleLinkClick()}>
              <a href={ResumePdf} target='_blank'>
                Resume
              </a>
            </li>
            <li className={this.navItem} onClick={() => this.handleLinkClick()}>
              <Link to='/#contact'>Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Nav;
