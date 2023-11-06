import React from 'react';


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
            <a className="article" href="#">
                <img src={Article1} alt="Bild på en kvinna" />
                <p>Business</p>
                <h3>How To Use Digitalization In The Classroom</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.</p>
            </a>
            <a className="article" href="#">
                <img src={Article2} alt="Närbild på en datorskärm" />
                <p>Business</p>
                <h3>How To Implement Chat GPT In Your Projects</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.</p>
            </a>
            <a className="article" href="#">
                <img src={Article3} alt="Bild på en kvinna" />
                <p>Business</p>
                <h3>The Guide To Support Modern CSS Design</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.</p>
            </a>
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