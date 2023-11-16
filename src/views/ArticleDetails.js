import React from 'react';
import { NavLink } from 'react-router-dom';

import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import BottomFooter from '../components/Footer/BottomFooter';
import ShowcaseNews from '../components/Showcase/ShowcaseNews';

const ArticleDetails = () => {
  return (
    <div className="wrapper">
        <Header />
        <ShowcaseNews />
        <Footer />
        <BottomFooter />
    </div>
  )
}

export default ArticleDetails