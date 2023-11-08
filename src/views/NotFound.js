import React from 'react';
import { NavLink } from 'react-router-dom';

import Image from '../assets/images/404_image.png';
import BottomFooter from '../components/Footer/BottomFooter';

const NotFound = () => {
  return (
    <div className="notfound">
      <div className="container">
          <div className="section-title">
              <h1>404</h1>
              <p>The page you're looking for doesn't seem to exist... please go back to the startpage.</p>
          </div>
          <div className="button">
            <NavLink className="btn-yellow" to="/">Go Back <i className="fa-regular fa-arrow-up-right"></i></NavLink>
          </div>
          <div className="image">
              <img src={ Image } alt="Image of a quizzical cat" />
          </div>
      </div>
      <BottomFooter />
    </div>
  )
}

export default NotFound