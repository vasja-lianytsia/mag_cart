import React from "react";
// import styled, { ThemeProvider } from 'styled-components';
// import { GlobalStyle } from '../../styles/globalStyle';
import icons21 from '../icons/icons21.svg'
import icons22 from '../icons/icons22.svg'
import icons23 from '../icons/icons23.svg'



const Contact = () => (
    <section className='contact'>
        <div className='container'>
        <h3 class="services_general-title"><br></br>Get in touch</h3>
        <strong class="services_row">Lorem ipsum dolor sit amet, consetetur sadipscing elitr amet</strong>
        <div className='flex-container'>
            <div className='info-cont'>
                <div className='info_block'>
                    <i className='info-icon'><img src={icons21} alt=""></img></i>
                    <h3 class="info_title">Address</h3>
                    <p className='info_txt'>312, 7th Ave, New York NY</p>
                    <p className='info_txt'>101200, United States of America  </p>
                </div>
                <div className='info_block'>
                    <i className='info-icon'><img src={icons22} alt=""></img></i>
                    <h3 class="info_title">Hotline (24x7)</h3>
                    <p className='info_txt'>+65 0052 300, +65 88251 210 </p>
                    <p className='info_txt'>+88 01723 511 340  </p>
                </div>
                <div className='info_block'>
                    <i className='info-icon'><img src={icons23} alt=""></img></i>
                    <h3 class="info_title">E-mail</h3>
                    <p className='info_txt'>shapedtheme@gmail.com</p>
                    <p className='info_txt'>khalilkode@gmail.com</p>
                </div>
            </div>
            <div className='registration'>
                    <form className='contactForm' method='post'>
                        <div className='cont-imput' id='cont-imput'>
                        <input
                            className="myinput"
                            type="text"
                            name="firstName"
                            placeholder="NAME"
                            required
                        />
                        </div>
                        <div className='cont-imput' id='cont-imput'>
                        <input
                            className="myinput"
                            type="text"
                            name="firstName"
                            placeholder="YOUR E-MAIL"
                            required
                        />
                        </div>
                        <div className='cont-imput' id='cont-imput'>
                        <input
                            className="myinput"
                            type="text"
                            name="firstName"
                            placeholder="YOUR SUBJECT"
                            required
                        />
                        </div>
                        <div className='cont-imput' id='cont-imput'>
                        <input
                            className="myinput"
                            type="text"
                            name="firstName"
                            placeholder="COMPANY NAME"
                            required
                        />
                        </div>
                        <div id="messag">
                        <textarea
                            className="messag"
                            type="text"
                            name="firstName"
                            placeholder="WRITE YOUR MESSAGE"
                            required
                        textarea/>
                        </div>
                        <button className='contact-startup-btn' type='submit'>
                            <span class="btn-txt">Send message</span>
                        </button>
                    </form>
                </div>
        </div>
        </div>
    </section>
)


export default Contact