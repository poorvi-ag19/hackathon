import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-column">
        <img src={require('../img/logo1.jpg')} alt="Company Logo" className="footer-logo" />
      </div>
      
      <div className="footer-column">
        <h3>Nab var menu</h3>
        <ul className="footer-menu">
          <li>Home</li>
          <li>Program</li>
          <li>Admission</li>
          <li>About Us</li>
          <li>FAQ</li>
          <li>Contact Us</li>
        </ul>
      </div>
      
      <div className="footer-column">
        <h3>Programs</h3>
        <ul>
          <li>BS in AI</li>
          <li>AS in AI</li>
        </ul>
      </div>
      
      <div className="footer-column">
        <h3>Contacts</h3>
        <p>hello@sarasai.org</p>
        <p>132 S State street, Salt Lake City, UT, USA</p>
        <p>108, Floor 6, Udyog Vihar-1, Gurugram, India</p>
      </div>
    </footer>
  );
};

export default Footer;
