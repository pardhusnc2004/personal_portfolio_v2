import React from 'react';
import { Link } from 'react-router-dom';
import { Typewriter } from 'react-simple-typewriter';

const Home = () => {
  return (
    <section className="flex-grow flex items-center pt-8 md:pt-12">
        <div className="grid max-w-screen-xl px-4 py-4 mx-auto lg:gap-8 xl:gap-0 lg:py-8 lg:grid-cols-12">
        <div className="flex justify-center lg:mt-0 lg:col-span-5 lg:flex">
            <img
                className="hero-image rounded-full transform  w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-[20rem] xl:max-w-[24rem]"
                src="https://static.vecteezy.com/system/resources/previews/028/253/247/large_2x/monkey-d-luffy-gear-5-straw-hat-pirates-one-piece-free-vector.jpg"
                alt="icon"
            />
        </div>



            <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-2xl font-extrabold tracking-tight leading-none md:text-3xl xl:text-4xl dark:text-white">
                Hey There! <span className="animate-waving-hand">👋</span> <br />
                I'm a <span className="text-blue-500">
                <Typewriter
                    words={['Web Developer', 'Senior Undergraduate', 'Tech Enthusiast']}
                    loop={true}
                    cursor
                    cursorColor='orange'
                    cursorStyle="|"
                    typeSpeed={100}
                    deleteSpeed={50}
                    delaySpeed={1000}
                />
                </span>
            </h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            I'm a dedicated backend developer and AI/ML enthusiast, driven by a passion for creating efficient and innovative solutions. I thrive on coding, exploring new technologies, and applying my tech stack to solve real-world challenges.
            </p>
            <div className="flex space-x-4">
                <Link
                    to="/about"
                    className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
                    >
                    Hire Me
                    <svg
                        className="w-5 h-5 ml-2 -mr-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                        ></path>
                    </svg>
                </Link>
                <Link   
                    to="/projects"
                    className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
                    >
                    <i className="fab fa-github mr-2"></i> See my work
                </Link>
            </div>
            </div>
        </div>
    </section>
  );
};

export default Home;
