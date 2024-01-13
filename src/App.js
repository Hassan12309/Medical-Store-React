// App.js
import React from 'react';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import Jumbotron from './components/Jumbotron';
import ProductCards from './components/Cards';
import ProgressBars from './components/ProgressBars';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';
const App = () => {
  return (
    <>
      <Navbar />
      <Carousel />
      <Jumbotron />
      <ProductCards />
      <ProgressBars />
      <Footer />
      <ContactModal />
    </>
  );
};

export default App;

