import React from 'react';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import ServiceBox from './ServiceBox';


function Services() {

    // const services = [
    //     { title: "Business Advice", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus." },
    //     { title: "Startup Business", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus." },
    //     { title: "Business Advice", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus." },
    //     { title: "Business Advice", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus." }
    // ];

    const [services, setServices] = useState([
        { id: 1, title: "Business Advice", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus." },
        { id: 2, title: "Startup Business", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus." },
        { id: 3, title: "Business Advice", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus." },
        { id: 4, title: "Business Advice", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus." }
        ]);


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
                    services.map((service, i) => {
                        <ServiceBox key={i} title={service.title} description={service.description} />
                        console.log(services)
                    })
                }
                {/* <div className="box">
                    <div className="line"></div>
                    <h3>Business Advice</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.</p>
                    <NavLink className="btn-round" to="/services"><i className="fa-regular fa-arrow-right"></i></NavLink>
                </div>
                <div className="box">
                    <div className="line"></div>
                    <h3>Startup Business</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.</p>
                    <NavLink className="btn-round" to="/services"><i className="fa-regular fa-arrow-right"></i></NavLink>
                </div>
                    <div className="box">
                    <div className="line"></div>
                    <h3>Financial Advice</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.</p>
                    <NavLink className="btn-round" to="/services"><i className="fa-regular fa-arrow-right"></i></NavLink>
                </div>
                <div className="box">
                    <div className="line"></div>
                    <h3>Risk Management</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.</p>
                    <NavLink className="btn-round" to="/services"><i className="fa-regular fa-arrow-right"></i></NavLink>
                </div> */}
            </div>
            <div className="button">
                <NavLink className="btn-transparent" to="/services">Browse Services <i className="fa-regular fa-arrow-up-right"></i></NavLink>
            </div>
        </div>
    </section>
  )
}

export default Services