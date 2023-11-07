import React from 'react';

import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import BottomFooter from '../components/Footer/BottomFooter';
import ShowcaseContact from '../components/Showcase/ShowcaseContact';
import ContactInfo from '../components/Contact/ContactInfo';

const Contact = () => {
  return (
    <div className='wrapper'>
      <Header />
      <ShowcaseContact />
      <ContactInfo />
      <Footer />
      <BottomFooter />
    </div>
  )
}

export default Contact