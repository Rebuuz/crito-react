import React from 'react';
import { NavLink } from 'react-router-dom';

import footerLogo from '../../assets/images/Logo-footer.svg';

const Footer = () => {
  return (
    <footer className="footer">
    <div className="waves-img"></div>
    <div className="container">
        <div className="footer-logo">
            <img src={ footerLogo } alt="Crito Logga" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat obcaecati voluptas voluptates! Voluptates laborum nam ratione minus necessitatibus, iure praesentium.</p>
        </div>
        <div className="column">
            <h3>Company</h3>
            <ul>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/features">Features</NavLink></li>
                <li><NavLink to="/works">Works</NavLink></li>
                <li><NavLink to="/career">Career</NavLink></li>
            </ul>
        </div>
        <div className="column">
            <h3>Help</h3>
            <ul>
                <li><NavLink to="/support">Customer Support</NavLink></li>
                <li><NavLink to="/delivery">Delivery Details</NavLink></li>
                <li><NavLink to="/terms">Terms & Conditions</NavLink></li>
                <li><NavLink to="/policy">Privacy Policy</NavLink></li>
            </ul>
        </div>
        <div className="column">
            <h3>Resources</h3>
            <ul>
                <li><NavLink to="/ebooks">Free eBooks</NavLink></li>
                <li><NavLink to="/tutorials">Development Tutorial</NavLink></li>
                <li><NavLink to="/blog">How to-Blog</NavLink></li>
                <li><NavLink to="/youtube">Youtube Playlist</NavLink></li>
            </ul>
        </div>
        <div className="column">
            <h3>Links</h3>
            <ul>
                <li><NavLink to="/ebooks">Free eBooks</NavLink></li>
                <li><NavLink to="/tutorials">Development Tutorial</NavLink></li>
                <li><NavLink to="/blog">How to-Blog</NavLink></li>
                <li><NavLink to="/youtube">Youtube Playlist</NavLink></li>
            </ul>
        </div>
    </div>
</footer>
  )
}

export default Footer