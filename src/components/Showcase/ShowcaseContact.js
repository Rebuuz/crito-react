import React from 'react';
import { NavLink } from 'react-router-dom';

const ShowcaseContact = () => {
  return (
    <section className="showcase">
            <div className="container">
                <div className="content">
                    <div className="section-title">
                            <NavLink to="/">Home</NavLink>
                            <NavLink to="/contact">Contact</NavLink>
                        <h1>Let's Connect</h1>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default ShowcaseContact