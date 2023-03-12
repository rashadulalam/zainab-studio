import React from 'react';
import { About, Blogs, Contact, Home } from './Pages';
import {Routes, Route}  from 'react-router-dom';
import { Footer, Topbar, ZsNavbar } from './Components';

const App = () => {
  return (
    <>
      <Topbar />
      <ZsNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={"404 Not Found!"} />
      </Routes>
      <Footer />
      
    </>
  );
};

export default App;