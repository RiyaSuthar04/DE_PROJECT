import React from 'react';
import Navbar from '../components/navBar';
import Slider from '../components/Slider';
import CategoryButtons from '../components/CategoryButtons';
import AboutContent from '../components/AboutContent';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Slider />
      <CategoryButtons />
      <AboutContent />
      <Footer />
    </div>
  );
};

export default Home;
