import React from 'react';
import { NavLink } from 'react-router-dom';

const HeaderMenu = () => {
  return (
    <div className="menu">
    <div className="top-menu">
        <div className="contact">
            <div className="contact-info">
                <i className="fa-regular fa-phone-volume"></i>
                +46 (8) 121 470 50
            </div>
            <div className="contact-info">
                <i className="fa-regular fa-envelope-dot"></i>
                info@crito.com
            </div>
            <div className="contact-info last">
                <i className="fa-regular fa-location-dot"></i>
                Sveavägen 31, 111 34 STOCKHOLM
            </div>
        </div>
        <div className="contact-media">
            <a href="#"><i className="fa-brands fa-facebook"></i></a>
            <a href="#"><i className="fa-brands fa-x-twitter"></i></a>
            <a href="#"><i className="fa-brands fa-instagram"></i></a>
            <a href="#"><i className="fa-brands fa-linkedin"></i></a>
        </div>
    </div>
    <div className="main-menu">
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/services">Services</NavLink>
            <NavLink to="/news">News</NavLink>
            <NavLink to="/contact">Contact</NavLink>
        </nav>
        <a className="btn-yellow btn-login" href="#">Login <i className="fa-regular fa-arrow-up-right"></i></a>
    </div>
</div>
  )
}

export default HeaderMenu