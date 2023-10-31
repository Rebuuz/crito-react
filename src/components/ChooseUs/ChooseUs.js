import React from 'react';
import './ChooseUs.css';

import Icon1 from '../../assets/images/icon1.svg';
import Icon2 from '../../assets/images/icon2.svg';
import Icon3 from '../../assets/images/icon3.svg';
import Icon4 from '../../assets/images/icon4.svg';
import Image from '../../assets/images/Image-choose.svg';

const ChooseUs = () => {
  return (
    <section className="why-choose-us">
        <div className="container">
            <div className="content-left col-4">
                <p>Why Choose Us</p>
                <h2>Why We Are The Best Business Consulting Agency</h2>
                <div className="bottom-box">
                    <div className="icon">
                        <img src={ Icon1 } alt="Ikon med tummen upp" />
                    </div>
                    <div className="text">
                        <h3>Process Excellence</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur.</p>
                    </div>
                    <div className="icon">
                        <img src={ Icon2 } alt="Ikon med tummen upp" />
                    </div>
                    <div className="text">
                        <h3>Strategic Planning</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur.</p>
                    </div>
                    <div className="icon">
                        <img src={ Icon3 } alt="Ikon med tummen upp" />
                    </div>
                    <div className="text">
                        <h3>Experience Design</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur.</p>
                    </div>
                    <div className="icon">
                        <img src={ Icon4 } alt="Ikon med tummen upp" />
                    </div>
                    <div className="text">
                        <h3>Artificial Intelligence</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur.</p>
                    </div>
                </div>
            </div>
            <div className="content-right col-6">
                <div className="bg-box"></div>
                <img src={ Image } alt="Bild på två kvinnor" />
            </div>
        </div>
    </section>
  )
}

export default ChooseUs