// src/components/Banner.js
import React from 'react';
import './Banner.css'; // Import the CSS for styling

const Banner = () => {
  return (
    <div className="banner-container">
      <img 
        src={require('../img/faq-banner.jpg')} 
        alt="Banner" 
        className="banner-image" 
      />

      <div className="banner-content">
         <h2>Whether you're a prospective student looking for program details, a parent seeking information about our curriculum, or a current student with inquiries about your studies, we're here to help.</h2>
        <button className="apply-now-button">Apply Now</button>
      </div>
    </div>
  );
};

export default Banner;
