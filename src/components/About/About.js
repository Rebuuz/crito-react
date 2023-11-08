import React from 'react';
import { NavLink } from 'react-router-dom';


import Founder from '../../assets/images/founder.png';

const About = () => {
  return (
    <section className="about-company">
    <div className="container">
        <div className="column-left col-5">
            <img src={ Founder } alt="Bild på grundaren, Samantha Brown" />
            <div className="founder-box">
                <h3>Samantha Brown, <span>Founder</span></h3>
                <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit."</p>
            </div>
        </div>
        <div className="column-right col-5">
            <h3>About Company</h3>
            <h2>We Are Business Consulting & Credit Repair Experts</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam officiis quas assumenda esse obcaecati? Ex esse error voluptates iure vel totam eos.</p>
                
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis esse quasi incidunt adipisci accusantium libero provident voluptate amet.</p>

            <div className="buttons">
                <NavLink className="btn-black" to="/services">Learn More <i className="fa-regular fa-arrow-up-right"></i></NavLink>
                <NavLink className="btn-round" to="/video"><i className="fa-sharp fa-solid fa-play"></i></NavLink><span>Intro Video</span>
            </div>
        </div>
    </div>
</section>
  )
}

export default About