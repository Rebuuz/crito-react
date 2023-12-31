import React from 'react';
import { NavLink } from 'react-router-dom';


import Article1 from '../../assets/images/25mars.png';
import Article2 from '../../assets/images/17mars.png';
import Article3 from '../../assets/images/13mars.png';

const ArticlesNews = () => {
    
  return (
    <section className="articles-news">
        <div className="container">
           <div className="section-title">
            <p>Articles & News</p>
            <h2>Get Every Single Articles & News <a className="btn-transparent" href="#">Browse Articles <i className="fa-regular fa-arrow-up-right"></i></a></h2>
           </div> 
           <div className="news-section">
            <NavLink className="article" to="/Articles/cb24396b-ae21-4c34-a267-d0cd0600aa6d">
                <img src={Article1} alt="Bild på en kvinna" />
                <p>Business</p>
                <h3>How To Use Digitalization In The Classroom</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.</p>
            </NavLink>
            <NavLink className="article" to="/Articles/cc6c2b75-8ee7-4e4e-8a99-66fe89a4b789">
                <img src={Article2} alt="Närbild på en datorskärm" />
                <p>Business</p>
                <h3>How To Implement Chat GPT In Your Projects</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.</p>
            </NavLink>
            <NavLink className="article" to="/Articles/228c829d-4f66-431f-bb20-1b3aed2869b6">
                <img src={Article3} alt="Bild på en kvinna" />
                <p>Business</p>
                <h3>The Guide To Support Modern CSS Design</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.</p>
            </NavLink>
           </div>
            <div className="icons">
                <a href="#"><span className="dot"></span></a>
                <a href="#"><span className="dot active"></span></a>
                <a href="#"><span className="dot"></span></a>
                <a href="#"><span className="dot"></span></a>
                <a href="#"><span className="dot"></span></a>
            </div>
        </div>
    </section>
  )
}

export default ArticlesNews