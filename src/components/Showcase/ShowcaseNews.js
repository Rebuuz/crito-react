import React from 'react';
import { NavLink } from 'react-router-dom';

const ShowcaseNews = () => {
  return (
    <section className="showcase">
            <div className="container">
                <div className="content">
                    <div className="section-title">
                            <NavLink to="/">Home</NavLink>
                            <NavLink to="/news">News</NavLink>
                        <h1>Articles & News</h1>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default ShowcaseNews