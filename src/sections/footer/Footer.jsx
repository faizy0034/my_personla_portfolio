import React from "react";
import './footer.css';
import {FaGithub, FaDribbble } from "react-icons/fa";
import { FaInstagram, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container footer-content">
        <h3 className="footer-logo">FaizyTech</h3>
        <p className="footer-text">© {new Date().getFullYear()} FaizyTech. All rights reserved.</p>

        <div className="footer-socials">
          <a href="https://www.instagram.com/adekunlefaizoladebayo/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a href="https://x.com/faizytech001" target="_blank" rel="noopener noreferrer"><FaXTwitter /></a>
          <a href="https://dribbble.com/faizytech" target="_blank" rel="noopener noreferrer"><FaDribbble /></a>
          <a href="https://github.com/faizy0034" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
