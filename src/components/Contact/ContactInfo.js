import React from 'react';
import { NavLink } from 'react-router-dom';

const Contact = () => {
  return (
    <section className="contact">
            <div className="container">
                <div className="box">
                    <div className="round-icon"><i className="fa-sharp fa-solid fa-location-dot"></i></div>
                    <div className="box-text">
                        <h3>Visit us</h3>
                        <p>Sveavägen 31</p>
                        <p>111 34 STOCKHOLM</p>
                    </div>
                </div>
                <div className="box">
                    <div className="round-icon"><i className="fa-sharp fa-solid fa-phone"></i></div>
                    <div className="box-text">
                        <h3>Call us</h3>
                        <p>+46 (8) 121 470 50</p>
                        <p>+46 (8) 121 470 51</p>
                    </div>
                </div>
                <div className="box">
                    <div className="round-icon"><i className="fa-sharp fa-solid fa-envelope"></i></div>
                    <div className="box-text">
                        <h3>Email us</h3>
                        <p>info@crito.com</p>
                        <p>support@crito.com</p>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default Contact