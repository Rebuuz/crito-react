import React from 'react';
import { NavLink } from 'react-router-dom';

import Header from '../components/Header/Header';
import ShowcaseNews from '../components/Showcase/ShowcaseNews';
import Footer from '../components/Footer/Footer';
import BottomFooter from '../components/Footer/BottomFooter';
import Articles from '../components/ArticlesNews/Articles';
import SignUp from '../components/SignUp/SignUp';


const News = () => {
  return (
    <div className="wrapper">
        <Header />
        <ShowcaseNews />
        <Articles />
        <SignUp />
        <Footer />
        <BottomFooter />
    </div>
  )
}

export default News