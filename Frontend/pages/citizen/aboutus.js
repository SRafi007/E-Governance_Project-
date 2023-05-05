import React from 'react';
import Navbar from './components/CustomNavbar'

const AboutUs = () => {
  return (
    <>
    <Navbar/>
    <div className="">
      <h1>About Us</h1>
      <p>
        We are a government organization dedicated to providing essential services to our citizens. Our mission is to improve the quality of life of every individual in our community, and we achieve this by offering free medical campaigns and providing food items to those in need. We also offer free doctor consultations to ensure that everyone has access to quality healthcare.
      </p>
      <p>
        Our team is made up of dedicated professionals who are committed to serving our community. We believe that every individual deserves the best possible care, and we work tirelessly to ensure that our services are accessible to everyone, regardless of their socioeconomic status.
      </p>
      <p>
        Thank you for choosing us as your partner in health and wellness. We look forward to serving you and your family for years to come.
      </p>
    </div>
    </>
  );
};

export default AboutUs;
