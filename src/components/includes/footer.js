import React from "react";

import icons11 from '../../icons/icons11.svg'
import icons12 from '../../icons/icons12.svg'
import icons13 from '../../icons/icons13.svg'
import icons14 from '../../icons/icons14.svg'

 

const Footer = () => (
        <footer className='footer'>
          <div className='container'>
            <h3 className='footer_general-title'>
            <a classNanme='footer-icons' href="#"><img src={icons11} alt=""></img></a>
            <a classNanme='footer-icons' href="#"><img src={icons12} alt=""></img></a>
            <a classNanme='footer-icons' href="#"><img src={icons13} alt=""></img></a>
            <a classNanme='footer-icons' href="#"><img src={icons14} alt=""></img></a>
            </h3>
          <p class="footer_txt">© 2019 Startup, Designed by ShapedTheme</p>
          </div>
        </footer>
    )
  

export default Footer


