import React from 'react';

import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import BottomFooter from '../components/Footer/BottomFooter';
import ShowcaseNews from '../components/Showcase/ShowcaseNews';
import ArticleInfo from '../components/ArticlesNews/ArticleInfo';
import ArticlesNews from '../components/ArticlesNews/ArticlesNews';

const ArticleDetails = () => {

  return (
    <div className="wrapper">
        <Header />
        <ShowcaseNews />
        <ArticleInfo />
        <ArticlesNews />
        <Footer />
        <BottomFooter />
    </div>
  )
}

export default ArticleDetails