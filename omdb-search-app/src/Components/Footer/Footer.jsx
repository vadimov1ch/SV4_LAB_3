import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        © {new Date().getFullYear()} | Created by <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">Your Name</a>
      </div>
    </footer>
  );
};

export default Footer;