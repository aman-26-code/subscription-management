import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="social-icons">
        <a href="https://github.com/aman-26-code/subscription-management" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href="https://www.linkedin.com/in/aman-shaikh26/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href="https://twitter.com/your-twitter" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
      </div>
      <p>&copy; {new Date().getFullYear()} Subscription Manager. All rights reserved.</p>
      <button className="scroll-top" onClick={scrollToTop} title="Scroll to top">
        <FontAwesomeIcon icon={faArrowUp} />
      </button>
    </footer>
  );
};

export default Footer;
