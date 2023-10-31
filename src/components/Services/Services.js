import React from 'react'

import './Services.css';

function Services() {
  return (
    <section className="services">
        <div className="container">
            <div className="section-title">
                <p>Our Services</p>
                <h2>We Provide The Best</h2>
                <h2>Service For Consulting</h2>
            </div>
            <div className="cards">
                <div className="box">
                    <div className="line"></div>
                    <h3>Business Advice</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.</p>
                    <a className="btn-round" href="#"><i className="fa-regular fa-arrow-right"></i></a>
                </div>
                <div className="box">
                    <div className="line"></div>
                    <h3>Startup Business</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.</p>
                    <a className="btn-round" href="#"><i className="fa-regular fa-arrow-right"></i></a>
                </div>
                    <div className="box">
                    <div className="line"></div>
                    <h3>Financial Advice</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.</p>
                    <a className="btn-round" href="#"><i className="fa-regular fa-arrow-right"></i></a>
                </div>
                <div className="box">
                    <div className="line"></div>
                    <h3>Risk Management</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.</p>
                    <a className="btn-round" href="#"><i className="fa-regular fa-arrow-right"></i></a>
                </div>
            </div>
            <div className="button">
                <a className="btn-transparent" href="#">Browse Services <i className="fa-regular fa-arrow-up-right"></i></a>
            </div>
        </div>
    </section>
  )
}

export default Services