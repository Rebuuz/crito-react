import React from 'react';

import Header from '../components/Header/Header';
import Showcase from '../components/Showcase/Showcase';
import Companies from '../components/Clients/Companies';
import Features from '../components/Features/Features';
import About from '../components/About/About';
import Services from '../components/Services/Services';
import Footer from '../components/Footer/Footer';
import BottomFooter from '../components/Footer/BottomFooter';
import ChooseUs from '../components/ChooseUs/ChooseUs';
import Projects from '../components/Projects/Projects';
import Team from '../components/Team/Team';
import Testimonials from '../components/Testimonials/Testimonials';
import ArticlesNews from '../components/ArticlesNews/ArticlesNews';
import SignUp from '../components/SignUp/SignUp';

const Home = () => {
  return (
    <div className='wrapper'>

      <Header />
      <Showcase />
      <Companies />
      <Features />
      <About />
      <Services />
      <ChooseUs />
      <Projects />
      <Team />
      <Testimonials />
      <ArticlesNews />
      <SignUp />
      <Footer />
      <BottomFooter />
      
    </div>
  )
}

export default Home