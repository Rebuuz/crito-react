import React from 'react';

import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import BottomFooter from '../components/Footer/BottomFooter';
import ShowcaseContact from '../components/Showcase/ShowcaseContact';
import ContactInfo from '../components/Contact/ContactInfo';
import Form from '../components/Form/Form';
import Map from '../components/Map/Map';

const Contact = () => {
  return (
    <div className='wrapper'>
      <Header />
      <ShowcaseContact />
      <ContactInfo />
      <Form />
      <Map />
      <Footer />
      <BottomFooter />
    </div>
  )
}

export default Contact