import React from 'react';

import ShowcaseImage from '../../assets/images/Image-showcase.svg';
import { NavLink } from 'react-router-dom';

const Showcase = () => {
  return (
    <section className="showcase">
        <div className="container">
            <div className="content">
                <h1>We Provide The Best Business Solutions</h1>
                <p>Establish your vision and value proposition and turn them into testable prototypes.</p>
                <NavLink className="btn-yellow" to="/consulting">Get Consulting <i className="fa-regular fa-arrow-up-right"></i></NavLink>
                <NavLink className="btn-transparent" to="/about">Learn More <i className="fa-regular fa-arrow-up-right"></i></NavLink>
            </div>
            <img className="image" src={ ShowcaseImage } alt="image of a man with a tablet" />
        </div>
    </section>
  )
}

export default Showcase;
