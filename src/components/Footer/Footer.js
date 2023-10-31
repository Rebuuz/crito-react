import React from 'react';

import './Footer.css';

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
                <li><a href="#">About</a></li>
                <li><a href="#">Features</a></li>
                <li><a href="#">Works</a></li>
                <li><a href="#">Career</a></li>
            </ul>
        </div>
        <div className="column">
            <h3>Help</h3>
            <ul>
                <li><a href="#">Customer Support</a></li>
                <li><a href="#">Delivery Details</a></li>
                <li><a href="#">Terms & Conditions</a></li>
                <li><a href="#">Privacy Policy</a></li>
            </ul>
        </div>
        <div className="column">
            <h3>Resources</h3>
            <ul>
                <li><a href="#">Free eBooks</a></li>
                <li><a href="#">Development Tutorial</a></li>
                <li><a href="#">How to-Blog</a></li>
                <li><a href="#">Youtube Playlist</a></li>
            </ul>
        </div>
        <div className="column">
            <h3>Links</h3>
            <ul>
                <li><a href="#">Free eBooks</a></li>
                <li><a href="#">Development Tutorial</a></li>
                <li><a href="#">How to - Blog</a></li>
                <li><a href="#">Youtube Playlist</a></li>
            </ul>
        </div>
    </div>
</footer>
  )
}

export default Footer