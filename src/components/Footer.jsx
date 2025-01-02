import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagram, faMedium } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footer = ({ className }) => {
  return (
    <footer className={`bg-white dark:bg-gray-900 p-4 ${className}`}>
      <div className="flex flex-col space-y-4 items-center md:space-y-0 md:flex-row md:space-x-6 md:justify-center">
        <a
          href="https://github.com/pardhusnc2004"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon flex items-center gap-2 text-gray-900 dark:text-white hover:text-gray-700 dark:hover:text-gray-300"
        >
          <FontAwesomeIcon icon={faGithub} />
          <span>Github</span>
        </a>
        <a
          href="https://linkedin.com/in/pardhasaradhi-polisetty"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon flex items-center gap-2 text-gray-900 dark:text-white hover:text-gray-700 dark:hover:text-gray-300"
        >
          <FontAwesomeIcon icon={faLinkedin} />
          <span>LinkedIn</span>
        </a>
        <a
          href="mailto:pvps.naidu@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon flex items-center gap-2 text-gray-900 dark:text-white hover:text-gray-700 dark:hover:text-gray-300"
        >
          <FontAwesomeIcon icon={faEnvelope} />
          <span>Email</span>
        </a>
        <a
          href="https://www.instagram.com/pardhu2004_/"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon flex items-center gap-2 text-gray-900 dark:text-white hover:text-gray-700 dark:hover:text-gray-300"
        >
          <FontAwesomeIcon icon={faInstagram} />
          <span>Instagram</span>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
