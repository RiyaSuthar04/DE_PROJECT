import React from 'react';
import Navbar from '../components/navBar';
import Footer from '../components/Footer';
import AboutUsComponent from "../components/AboutUsComponent"
import '../css/AboutContent.css'; // Create this CSS file

const AboutUs = () => {
  return (
    <div className="about-page">
      <Navbar />
      <AboutUsComponent/>
      <Footer />
    </div>
  );
};

export default AboutUs;