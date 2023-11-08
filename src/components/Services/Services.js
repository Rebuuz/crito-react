import React from 'react';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import ServiceBox from './ServiceBox';


function Services() {

    const services = [
        { title: "Business Advice", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus." },
        { title: "Startup Business", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus." },
        { title: "Business Advice", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus." },
        { title: "Business Advice", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus." }
    ];


  return (
    <section className="services">
        <div className="container">
            <div className="section-title">
                <p>Our Services</p>
                <h2>We Provide The Best</h2>
                <h2>Service For Consulting</h2>
            </div>
            <div className="cards">
                {
                    services.map((services, index) => {
                        return <ServiceBox key={index} title={services.title} description={services.description}/>
                    })
                }
                
            </div>
            <div className="button">
                <NavLink className="btn-transparent" to="/services">Browse Services <i className="fa-regular fa-arrow-up-right"></i></NavLink>
            </div>
        </div>
    </section>
  )
}

export default Services