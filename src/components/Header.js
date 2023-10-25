import React from 'react'
import { MenuBar } from './MenuBar';

export const Header = () => {
  return (
    <header>
        <div class="container">
            <a href="index.html"><img src="./images/Crito-logo.svg" alt="logo" class="crito logotype" /></a>
            
            <MenuBar />

            <div class="menu">
                <div class="top-menu">
                    <div class="contact">
                        <div class="contact-info">
                            <i class="fa-regular fa-phone-volume"></i>
                            +46 (8) 121 470 50
                        </div>
                        <div class="contact-info">
                            <i class="fa-regular fa-envelope-dot"></i>
                            info@crito.com
                        </div>
                        <div class="contact-info last">
                            <i class="fa-regular fa-location-dot"></i>
                            Sveavägen 31, 111 34 STOCKHOLM
                        </div>
                    </div>
                    <div class="contact-media">
                        <a href="#"><i class="fa-brands fa-facebook"></i></a>
                        <a href="#"><i class="fa-brands fa-x-twitter"></i></a>
                        <a href="#"><i class="fa-brands fa-instagram"></i></a>
                        <a href="#"><i class="fa-brands fa-linkedin"></i></a>
                    </div>
                </div>
                <div class="main-menu">
                    <nav>
                        <a class="active" href="index.html">Home</a>
                        <a href="#">Services</a>
                        <a href="#">News</a>
                        <a href="contact.html">Contact</a>
                    </nav>
                    <a class="btn-yellow btn-login" href="#">Login <i class="fa-regular fa-arrow-up-right"></i></a>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header;