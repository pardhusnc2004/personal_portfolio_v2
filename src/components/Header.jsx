import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 border-b border-gray-200 dark:border-gray-600">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between p-4">
        <Link to="/" className="text-2xl font-bold text-gray-900 dark:text-white">
          Pardhu<span className="text-blue-500"> Polisetty</span>
        </Link>

        <div className="hidden md:flex space-x-6 items-center">
          <Link
            to="/"
            className="text-gray-900 hover:text-blue-700 dark:text-white dark:hover:text-blue-500"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-gray-900 hover:text-blue-700 dark:text-white dark:hover:text-blue-500"
          >
            About
          </Link>
          <Link
            to="/projects"
            className="text-gray-900 hover:text-blue-700 dark:text-white dark:hover:text-blue-500"
          >
            Projects
          </Link>
          <Link
            to="/skills"
            className="text-gray-900 hover:text-blue-700 dark:text-white dark:hover:text-blue-500"
          >
            Skills
          </Link>
          <Link
            to="/contact"
            className="text-gray-900 hover:text-blue-700 dark:text-white dark:hover:text-blue-500"
          >
            Contact
          </Link>

          
          <a
            href="personal_portfolio_v2/PVPSNaidu.pdf" 
            target="_blank" 
            rel="noopener noreferrer" 
            download
            className="inline-flex items-center justify-center px-5 py-2.5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
          >
            View Resume
          </a>
        </div>

        
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-gray-500 dark:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-600"
        >
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
            />
          </svg>
        </button>
      </div>

      
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-600">
          <ul className="flex flex-col space-y-2 p-4">
            <li>
              <Link
                to="/"
                onClick={() => { setIsMenuOpen(false) }}
                className="block text-gray-900 hover:text-blue-700 dark:text-white dark:hover:text-blue-500"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                onClick={() => { setIsMenuOpen(false) }}
                className="block text-gray-900 hover:text-blue-700 dark:text-white dark:hover:text-blue-500"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/projects"
                onClick={() => { setIsMenuOpen(false) }}
                className="block text-gray-900 hover:text-blue-700 dark:text-white dark:hover:text-blue-500"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="/skills"
                onClick={() => { setIsMenuOpen(false) }}
                className="block text-gray-900 hover:text-blue-700 dark:text-white dark:hover:text-blue-500"
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                onClick={() => { setIsMenuOpen(false) }}
                className="block text-gray-900 hover:text-blue-700 dark:text-white dark:hover:text-blue-500"
              >
                Contact
              </Link>
            </li>
            
            <li>
              <a
                href="personal_portfolio_v2/PVPSNaidu.pdf" 
                target="_blank" 
                rel="noopener noreferrer" 
                download
                className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
              >
                View Resume
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Header;
