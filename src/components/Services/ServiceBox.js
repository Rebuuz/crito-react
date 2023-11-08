import React from 'react';
import { NavLink } from 'react-router-dom';

const ServiceBox = ({title, description}) => {
  return (
    <div className="box">
        <div className="line"></div>
        <h3>{title}</h3>
        <p>{description}</p>
        <NavLink className="btn-round" to="/services"><i className="fa-regular fa-arrow-right"></i></NavLink>
    </div>
  )
}

export default ServiceBox