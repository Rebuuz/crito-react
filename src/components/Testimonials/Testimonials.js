import React from 'react';

import './Testimonials.css';

import Round1 from '../../assets/images/round1.svg';
import Round2 from '../../assets/images/round2.svg';
import Round3 from '../../assets/images/round3.svg';


const Testimonials = () => {
  return (
    <section className="testimonials">
        <div className="container">
            <div className="section-title">
                <p>Testimonials</p>
                <h2>What Our Clients Says</h2>
            </div>
            <div className="section-reviews">
                <div className="cards">
                    <div className="review-card">
                        <div className="stars">
                            <i className="fa-sharp fa-solid fa-star"></i>
                            <i className="fa-sharp fa-solid fa-star"></i>
                            <i className="fa-sharp fa-solid fa-star"></i>
                            <i className="fa-sharp fa-solid fa-star"></i>
                            <i className="fa-sharp fa-solid fa-star"></i>
                        </div>
                        <p>"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate"</p>
                        <div className="review-bottom">
                            <img src={Round1} alt="Bild på Cassandra Warren" />
                            <div>
                                <h3>Cassandra Warren</h3>
                                <p>Business Manager, Dorfus</p>
                            </div>
                        </div>
                    </div> 
                    <div className="review-card">
                        <div className="stars">
                            <i className="fa-sharp fa-solid fa-star"></i>
                            <i className="fa-sharp fa-solid fa-star"></i>
                            <i className="fa-sharp fa-solid fa-star"></i>
                            <i className="fa-sharp fa-solid fa-star"></i>
                            <i className="fa-sharp fa-solid fa-star"></i>
                        </div>
                        <p>"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate"</p>
                        <div className="review-bottom">
                            <img src={Round2} alt="Bild på Amanda Tulling" />
                            <div>
                                <h3>Amanda Tulling</h3>
                                <p>Senior Developer, Square</p>
                            </div>
                        </div>
                    </div>  
                    <div className="review-card">
                        <div className="stars">
                            <i className="fa-sharp fa-solid fa-star"></i>
                            <i className="fa-sharp fa-solid fa-star"></i>
                            <i className="fa-sharp fa-solid fa-star"></i>
                            <i className="fa-sharp fa-solid fa-star"></i>
                            <i className="fa-sharp fa-solid fa-star"></i>
                        </div>
                        <p>"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate"</p>
                        <div className="review-bottom">
                            <img src={Round3} alt="Bild på Jack McDouglas" />
                            <div>
                                <h3>Jack McDouglas</h3>
                                <p>Key Account Manager, Gobona</p>
                            </div>
                        </div>
                    </div>   
                </div>
            </div>
            <div className="button">
                <a className="btn-black" href="#">All Reviews <i className="fa-regular fa-arrow-up-right"></i></a>
            </div>
        </div>
    </section>
  )
}

export default Testimonials