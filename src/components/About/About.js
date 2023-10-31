import React from 'react';

import './About.css';

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
                <a className="btn-black" href="#">Learn More <i class="fa-regular fa-arrow-up-right"></i></a>
                <a className="btn-round" href="#"><i className="fa-sharp fa-solid fa-play"></i></a><span>Intro Video</span>
            </div>
        </div>
    </div>
</section>
  )
}

export default About