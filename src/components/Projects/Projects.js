import React from 'react';

import './Projects.css';

import Article1 from '../../assets/images/article1.svg';
import Article2 from '../../assets/images/article2.svg';
import Article3 from '../../assets/images/article3.svg';
import Article4 from '../../assets/images/article4.svg';

const Projects = () => {
  return (
    <section className="project-and-case">
        <div className="container">
            <div className="section-title">
                <p>Project & Case Studies</p>
                <h2>Let’s Look At Our Global Projects</h2>
            </div>
            <div className="projects">
                <a className="article" href="#">
                    <img src={ Article1 } alt="En närbild på en Business-tidning" />
                    <h3>Grow your business</h3>
                    <div>Read More <i className="fa-regular fa-arrow-up-right"></i></div>
                </a>
                <a className="article" href="#">
                    <img src={ Article2 } alt="En närbild på en iPad och en Apple Watch" />
                    <h3>Why your client needs a responsive website</h3>
                    <div>Read More <i className="fa-regular fa-arrow-up-right"></i></div>
                </a>
                <a className="article" href="#">
                    <img src={ Article3 } alt="En närbild på ett anteckningsblock" />
                    <h3>Educate your employees to get better results</h3>
                    <div>Read More <i className="fa-regular fa-arrow-up-right"></i></div>
                </a>
                <a className="article" href="#">
                    <img src={ Article4 } alt="En närbild på en laptop med grafer" />
                    <h3>Business Insights is a important piece of your business</h3>
                    <div>Read More <i className="fa-regular fa-arrow-up-right"></i></div>
                </a>
            </div>
            <div className="button">
                <a className="btn-black" href="#">All Recent Projects <i class="fa-regular fa-arrow-up-right"></i></a>
            </div>
        </div>
    </section>
  )
}

export default Projects