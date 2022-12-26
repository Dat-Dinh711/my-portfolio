import React from 'react';
import { FaFacebookF } from 'react-icons/fa';
import { FiInstagram } from 'react-icons/fi';
import { BsLinkedin } from 'react-icons/bs';

import './footer.css';

const Footer = () => {
  return (
    <footer>
      <a href="#home" className="footer__logo">
        DAT DINH
      </a>

      <ul className="permalinks">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com/datdinh711/">
          <FaFacebookF />
        </a>
        <a href="https://www.instagram.com/_datdinh/">
          <FiInstagram />
        </a>
        <a href="https://www.linkedin.com/in/dinh-tan-dat/">
          <BsLinkedin />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; DAT DINH Turtorials. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
