import React from 'react';
import { NavLink } from 'react-router-dom';

const Form = () => {
  return (
    <form className="form">
            <div className="container">
                <div className="section-title">
                    <h2>Leave us a message</h2>
                    <h2>for any information</h2>
                </div>
                <div className="form-container">
                    <div className="input">
                        <input type="text" className="form-input" placeholder="Name*" required />
                    </div>
                    <div className="input">
                        <input type="email" className="form-input" placeholder="Email*" required />
                    </div>
                    <div className="input">
                        <textarea className="form-input" name="message" rows="5" placeholder="Your Message*" required></textarea>
                    </div>
                    <a className="btn-yellow" href="#">Send Message <i className="fa-regular fa-arrow-up-right"></i></a>
                </div>
            </div>
        </form>
  )
}

export default Form