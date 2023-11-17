import React from 'react';

import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import BottomFooter from '../components/Footer/BottomFooter';
import ShowcaseNews from '../components/Showcase/ShowcaseNews';
import ArticleInfo from '../components/ArticlesNews/ArticleInfo';

const ArticleDetails = () => {

  return (
    <div className="wrapper">
        <Header />
        <ShowcaseNews />
        <ArticleInfo />
        <Footer />
        <BottomFooter />
    </div>
  )
}

export default ArticleDetails