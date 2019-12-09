import React from 'react'
import { animateScroll as scroll } from "react-scroll";
import { Link } from "gatsby"
import MediaQuery from 'react-responsive';
import headerLogo from '../../images/logo.png'


import HeaderMain from '../Headers/HeaderMain';
import HeaderMinor from '../Headers/HeaderMinor';

export default class Navigation extends React.Component {
  scrollToTop = () => {
    scroll.scrollToTop();
  };


  
 
  render() {
    const { location, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    const siteName = "Gwen's Cake Shop"
    let header
    // if (location.pathname === rootPath) {
      header = (
        <HeaderMinor shopName={siteName}>
        </HeaderMinor>
      )
    // } else {
    //   header = (
    //     <HeaderMinor shopName={siteName}>
    //     </HeaderMinor>
    //   )
    // }
    return (
      <MediaQuery minDeviceWidth={991.97}>
      <header className="header">
        <div className="container">
          <nav className="navigation">
            <Link to="/" className="navigation__logo" onClick={this.scrollToTop}>
              <img src={headerLogo} alt="brand-logo" className="navigation__logo_img" />
            </Link>
            <div className="navigation__menu">
              <Link to="home" smooth={true} spy={true} offset={-70} duration={600} activeClass="active" className="navigation__menu_link">Home</Link>
              <Link to="skills" smooth={true} spy={true} offset={-70} duration={600} activeClass="active" className="navigation__menu_link">Skills</Link>
              <Link to="about" smooth={true} spy={true} offset={-70} duration={600} activeClass="active" className="navigation__menu_link">About</Link>
              <Link to="testimonials" smooth={true} spy={true} offset={-70} duration={600} activeClass="active" className="navigation__menu_link">Testimonials</Link>
              <Link to="product" smooth={true} spy={true} offset={-70} duration={600} activeClass="active" className="navigation__menu_link">Product</Link>
            </div>
            {header}
          </nav>
        </div>
      </header>
      </MediaQuery>
    );
  }
}