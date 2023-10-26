import React from 'react'
import MenuBar from './MenuBar';
import HeaderMenu from './HeaderMenu';

import CritoLogo from '../assets/images/Crito-logo.svg';

const Header = () => {
  return (
    <header>
        <div className="container">
            <a href="index.html"><img src={ CritoLogo } alt="logo" className="crito logotype" /></a>
            
            <MenuBar />
            <HeaderMenu />
        </div>
    </header>
  )
}

export default Header;