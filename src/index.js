import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './scss/components/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';


import Home from './views/Home';
import Contact from './views/Contact';
import NotFound from './views/NotFound';
import News from './views/News';
import ArticleDetails from './views/ArticleDetails';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/news' element={<News />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/articledetails' element={<ArticleDetails />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
