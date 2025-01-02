import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faCodeBranch,
} from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const ContactMe = () => {
  return (
    <section className="flex-grow flex items-center pt-20 md:pt-24">
      <div className="grid max-w-screen-xl px-4 py-4 mx-auto lg:gap-8 xl:gap-0 lg:py-8 lg:grid-cols-12">
        <div className="flex justify-center lg:mt-0 lg:col-span-5 lg:flex">
          <img
            src="personal_portfolio_v2/contact.png"
            alt="Contact Me"
            className="rounded-full transform w-full max-w-xs sm:max-w-sm md:max-w-md"
          />
        </div>
        <div className="mr-auto place-self-center my-3 lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-2xl font-extrabold tracking-tight leading-none md:text-3xl xl:text-4xl dark:text-white">
            Let's Connect <span className="text-blue-500">📬</span>
          </h1>
          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
          I am eager to explore opportunities and collaborations in AI, NLP, machine learning, and the MERN stack, particularly in backend development. Feel free to reach out, whether it's for a project, freelancing, or just to say hi!
          </p>
          <div className="grid gap-4 sm:grid-cols-3 md:grid-cols-4">
            <a
              href="mailto:pvps.naidu@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-700"
            >
              <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
              Email
            </a>
            <a
              href="https://github.com/pardhusnc2004"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-gray-800 rounded-lg hover:bg-gray-900"
            >
              <FontAwesomeIcon icon={faGithub} className="mr-2" />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/pardhasaradhi-polisetty/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-blue-600 rounded-lg hover:bg-blue-700"
            >
              <FontAwesomeIcon icon={faLinkedin} className="mr-2" />
              LinkedIn
            </a>
            <a
              href="https://www.instagram.com/pardhu2004_"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-pink-500 rounded-lg hover:bg-pink-600"
            >
              <FontAwesomeIcon icon={faInstagram} className="mr-2" />
              Instagram
            </a>
            <a
              href="https://x.com/PardhuPolisetty"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-blue-400 rounded-lg hover:bg-blue-500"
            >
              <FontAwesomeIcon icon={faTwitter} className="mr-2" />
              Twitter
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
