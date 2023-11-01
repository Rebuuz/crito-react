import React from 'react';
import '../stylesheets/Error.css';
import '../stylesheets/General.css';

import Image from '../assets/images/404_image.png';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import BottomFooter from '../components/Footer/BottomFooter';

const NotFound = () => {
  return (
    <div className="wrapper">
        <Header />
        <div className="section-title">
            <h1>404</h1>
            <p>The page you're looking for doesn't seem to exist... please go back to a previous one.</p>
        </div>
        <div className="image">
            <img src={ Image } alt="Image of a quizzical cat" />
        </div>
        <Footer />
        <BottomFooter />
    </div>
  )
}

export default NotFound