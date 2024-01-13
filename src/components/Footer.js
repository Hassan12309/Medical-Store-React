// Footer.js
import React from 'react';
import FacebookIcon from './facebook.png';
import InstagramIcon from './instagram.png';
import TwitterIcon from './twitter.png';

const Footer = () => {
  return (
    <footer className="footer mt-4 bg-dark text-white">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h5>Contact Information</h5>
            <p><strong>Email:</strong> hk1074731@gmail.com</p>
            <p><strong>Phone:</strong> +923125729943</p>
            <p><strong>Address:</strong> 123 Medical Street, Cityville, Country</p>
          </div>
          <div className="col-md-6">
            <h5>Follow Us On</h5>
            {/* Social Media Icons as Images */}
            <a href="https://www.facebook.com/yourmedicalstore" target="_blank" className="text-white me-3">
              <img src={FacebookIcon} alt="Facebook" width="30" height="30" />
            </a>
            <a href="https://www.instagram.com/yourmedicalstore" target="_blank" className="text-white me-3">
              <img src={InstagramIcon} alt="Instagram" width="30" height="30" />
            </a>
            <a href="https://twitter.com/yourmedicalstore" target="_blank" className="text-white">
              <img src={TwitterIcon} alt="Twitter" width="30" height="30" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
