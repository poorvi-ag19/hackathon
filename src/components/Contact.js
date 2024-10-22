import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <h1 className="contact-title">Still got questions? We’ll get in touch quickly</h1>
      <div className="contact-grid">
        {/* First column */}
        <div className="contact-info">
          <h2>Contact Information</h2>
          <p>Fill out the form and our team will get in touch in no time.</p>
        </div>

        {/* Second column */}
        <div className="contact-form">
          <h2>Send us a message</h2>
          <form>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" placeholder="Name.." />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="Email.." />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input type="tel" id="phone" placeholder="Phone.." />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" placeholder="Message.." rows="5"></textarea>
            </div>

            <button type="submit" className="submit-button">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
