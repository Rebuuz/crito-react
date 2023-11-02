import React from 'react';
import '../stylesheets/Error.css';
import '../stylesheets/General.css';

import Image from '../assets/images/404_image.png';
import BottomFooter from '../components/Footer/BottomFooter';

const NotFound = () => {
  return (
    <div className="wrapper">
        <div className="section-title">
            <h1>404</h1>
            <p>The page you're looking for doesn't seem to exist... please go back to a previous one.</p>
        </div>
        <div className="button">
          <a className="btn-yellow" href="#">Go Back <i className="fa-regular fa-arrow-up-right"></i></a>
        </div>
        <div className="image">
            <img src={ Image } alt="Image of a quizzical cat" />
        </div>
        <BottomFooter />
    </div>
  )
}

export default NotFound