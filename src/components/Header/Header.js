import React from 'react'
import MenuBar from './MenuBar';
import HeaderMenu from './HeaderMenu';
import {NavLink} from 'react-router-dom';

import CritoLogo from '../../assets/images/Crito-logo.svg';

const Header = () => {
  return (
    <header>
        <div className="container">
            <NavLink to="/"><img src={ CritoLogo } alt="logo" className="crito logotype" /></NavLink>
            
            <MenuBar />
            <HeaderMenu />
        </div>
    </header>
  )
}

export default Header;