import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const MenuBar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <div>
      <button className="menu-bars" type="button" onClick={toggleMenu}>
        {openMenu ? <i className="fa-solid fa-times"></i> : <i className="fa-solid fa-bars"></i>}
      </button>
      <div className={`menu-objects ${openMenu ? 'open' : ''}`}>
        <nav>
          <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/services">Services</NavLink></li>
            <li><NavLink to="/news">News</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default MenuBar;