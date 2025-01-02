import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faMapMarkerAlt, faEnvelope, faPhoneAlt, faCertificate, faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

const About = () => {
  return (
    <main className="flex-grow container mx-auto mt-16 p-6">
      <div className="max-w-screen-xl mx-auto">
        <section className=" p-6 rounded-lg">
          <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8">
          <img
  className="rounded-full shadow-lg w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64"
  src="https://static.vecteezy.com/system/resources/previews/028/253/247/large_2x/monkey-d-luffy-gear-5-straw-hat-pirates-one-piece-free-vector.jpg"
  alt="Pardhasaradhi Polisetty"
/>

            <div className="text-center md:text-left">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                Polisetty Venkata Pardhasaradhi Naidu
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center">
                  <p className="text-gray-700 dark:text-gray-300 text-left flex items-center font-semibold">
                <FontAwesomeIcon icon={faGraduationCap} className="mr-3" />
                <span>Senior Undergraduate | CSE</span>
                </p>
                </div>
                <div className="flex items-center">
                  <p className="text-gray-700 dark:text-gray-300 text-left flex items-center font-semibold">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-4" />
                <span>Visakhapatnam, India</span>
                </p>
                </div>
                <div className="flex items-center">
                  <p className="text-gray-700 dark:text-gray-300 text-left flex items-center font-semibold">
                <FontAwesomeIcon icon={faEnvelope} className="mr-4" />
                <span>
                    <a
                    href="mailto:pvps.naidu@gmail.com"
                    className="text-blue-500 hover:text-blue-700"
                    >
                    pvps.naidu@gmail.com
                    </a>
                </span>
                </p>
                </div>
                <div className="flex items-center">
                  <p className="text-gray-700 dark:text-gray-300 text-left flex items-center font-semibold">
                <FontAwesomeIcon icon={faPhoneAlt} className="mr-4" />
                <span>
                    <a href="tel:7995397226" className="text-blue-500 hover:text-blue-700">
                    7995397226
                    </a>
                </span>
                </p>
                </div>
            </div>
            </div>

          </div>
        </section>

        <div className="mt-8 space-y-4">
          <p
            className="text-gray-700 dark:text-gray-300"
            style={{ fontWeight: 300, fontSize: "1.25rem" }}
          >
            I'm Pardhu, a passionate backend developer and data science enthusiast. I love coding, learning new technologies, and currently focusing on AWS. With a strong interest in AI and machine learning, I aim to create innovative solutions and apply my skills to real-world challenges.
          </p>
          
        </div>
        {/* Education Section */}
        <section className="my-8">
            <h2 className="text-2xl font-semibold dark:text-white mb-6 relative text-blue-500 inline-block">
                <span className="text-blue-500">
                Education
                </span>
                <span
                    className="absolute w-full h-1 bg-blue-500 -bottom-1 left-0"
                    aria-hidden="true"
                />
            </h2>
            <div className="glass-card p-4 flex flex-col md:flex-row md:justify-between hover-effect">
            <div className="flex items-center">
                <img
                className="w-24 h-8 mr-4"
                src="https://vitap.ac.in/assets/images/logos/vitaplogored.png"
                alt="VITAP"
                />
                <div>
                <h3 className="text-xl text-white font-semibold">B.Tech in Computer Science</h3>
                <p className="institution italic">VIT-AP University</p>
                </div>
            </div>
            <p className="right-align text-gray-300 italic text-sm">2021 - present</p>
            </div>
        </section>

        {/* Courses and Certificates Section */}
        <section className="my-8">
        <h2 className="text-2xl font-semibold dark:text-white mb-6 relative text-blue-500 inline-block">
                <span className="text-blue-500">
                Certifications & Achievements
                </span>
                <span
                    className="absolute w-full h-1 bg-blue-500 -bottom-1 left-0"
                    aria-hidden="true"
                />
            </h2>
            <div className="space-y-4">
            <div className="flex items-center">
                    <FontAwesomeIcon icon={faCertificate} className="mr-4 text-orange-500" />
                    <p className="text-gray-700 dark:text-gray-300 font-semibold">
                        Generative AI || <span className="italic text-gray-500">@IBM</span> || <span className="italic text-blue-500"><a href="https://courses.edx.org/certificates/eff5aa186e7540a2976bbef2a6038b2f" target="blank">certificate</a></span>
                    </p>
                </div>
                <div className="flex items-center">
                    <FontAwesomeIcon icon={faCertificate} className="mr-4 text-orange-500" />
                    <p className="text-gray-700 dark:text-gray-300 font-semibold">
                        MERN Full-Stack Dev || <span className="italic text-gray-500">@Ethnus</span> || <span className="italic text-blue-500"><a href="https://drive.google.com/file/d/1KWpzxd9chyMcPBrfYWAKPlwI9-rezflU/view?usp=sharing" target="blank">certificate</a></span>
                    </p>
                </div>
                <div className="flex items-center">
                    <FontAwesomeIcon icon={faCertificate} className="mr-4 text-orange-500" />
                    <p className="text-gray-700 dark:text-gray-300 font-semibold">
                        ITT Summer Intern AIML || <span className="italic text-gray-500">@InTrain_Tech</span> || <span className="italic text-blue-500"><a href="https://drive.google.com/file/d/1aoc-vvGoYYeORrUf48J6y7v4KsCCVY3c/view?usp=sharing" target="blank">certificate</a></span>
                    </p>
                </div>
                <div className="flex items-center">
                    <FontAwesomeIcon icon={faCertificate} className="mr-4 text-orange-500" />
                    <p className="text-gray-700 dark:text-gray-300 font-semibold">
                        CodeBid 2.0 ||  <span className="italic text-gray-500">@Code_Chef_Club_VITAP</span> || <span className="italic text-blue-500"><a href="https://drive.google.com/file/d/1vnDFQFybww9QvxS3lfRGYycb8da3NHqm/view?usp=sharing" target="blank">certificate</a></span>
                    </p>
                </div>
                <div className="flex items-center">
                    <FontAwesomeIcon icon={faCertificate} className="mr-4 text-orange-500" />
                    <p className="text-gray-700 dark:text-gray-300 font-semibold">
                        CodeCrunch ||  <span className="italic text-gray-500">@Geeks_for_Geeks_Club_VITAP</span> || <span className="italic text-blue-500"><a href="https://drive.google.com/file/d/15WrQwGtbpswPD8tuDsPPn0yMOb_ymajE/view?usp=sharing" target="blank">certificate</a></span>
                    </p>
                </div><div className="flex items-center">
                    <FontAwesomeIcon icon={faCertificate} className="mr-4 text-orange-500" />
                    <p className="text-gray-700 dark:text-gray-300 font-semibold">
                        Fundamentals of Deep Learning ||  <span className="italic text-gray-500">@Nvidia</span> || <span className="italic text-blue-500"><a href="https://drive.google.com/file/d/1vnDFQFybww9QvxS3lfRGYycb8da3NHqm/view?usp=sharing" target="blank">certificate</a></span>
                    </p>
                </div>
                <div className="flex items-center">
                    <FontAwesomeIcon icon={faCertificate} className="mr-4 text-orange-500" />
                    <p className="text-gray-700 dark:text-gray-300 font-semibold">
                        Accelerated Computing with CUDA Python ||  <span className="italic text-gray-500">@Nvidia</span> || <span className="italic text-blue-500"><a href="https://drive.google.com/file/d/1gqnZr_TcPsdJ25n34fb9eYsznjNG0WO-/view?usp=sharing" target="blank">certificate</a></span>
                    </p>
                </div>
            </div>
        </section>
        {/* Dev Handles Section */}
        <section className="my-8">
            <h2 className="text-2xl font-semibold dark:text-white mb-6 relative text-blue-500 inline-block">
                <span className="text-blue-500">
                Developer Handles
                </span>
                <span
                    className="absolute w-full h-1 bg-blue-500 -bottom-1 left-0"
                    aria-hidden="true"
                />
            </h2>
            <div className="space-y-4">
            <div className="flex items-center">
                    <a href="https://leetcode.com/u/Lightning_Mc_Queen/" target="_blank"><FontAwesomeIcon icon={faArrowUpRightFromSquare} className="mr-4 text-orange-500" /></a>
                    
                    <p className="text-gray-700 dark:text-gray-300 font-semibold">
                        LeetCode || <span className="italic text-gray-500">@Lightning_Mc_Queen</span>
                    </p>
                </div>
                <div className="flex items-center">
                    <a href="https://www.geeksforgeeks.org/user/mcqueen95/" target="_blank"><FontAwesomeIcon icon={faArrowUpRightFromSquare} className="mr-4 text-orange-500" /></a>

                    <p className="text-gray-700 dark:text-gray-300 font-semibold">
                        GeeksforGeeks || <span className="italic text-gray-500">@mcqueen95</span>
                    </p>
                </div>
                <div className="flex items-center">
                    <a href="https://codeforces.com/profile/pardhu_01_max" target="_blank"><FontAwesomeIcon icon={faArrowUpRightFromSquare} className="mr-4 text-orange-500" /></a>

                    <p className="text-gray-700 dark:text-gray-300 font-semibold">
                        Codeforces  || <span className="italic text-gray-500">@pardhu_01_max</span>
                    </p>
                </div>
                <div className="flex items-center">
                    <a href="https://www.codechef.com/users/pardhu_0007" target="_blank"><FontAwesomeIcon icon={faArrowUpRightFromSquare} className="mr-4 text-orange-500" /></a>

                    <p className="text-gray-700 dark:text-gray-300 font-semibold">
                        Codechef ||  <span className="italic text-gray-500">@pardhu_0007</span>
                    </p>
                </div>
                <div className="flex items-center">
                    <a href="https://www.hackerrank.com/profile/pardhu_0007" target="_blank"><FontAwesomeIcon icon={faArrowUpRightFromSquare} className="mr-4 text-orange-500" /></a>

                    <p className="text-gray-700 dark:text-gray-300 font-semibold">
                        Hackerrank ||  <span className="italic text-gray-500">@pardhu_0007</span>
                    </p>
                </div>
            </div>
        </section>
      </div>
      
    </main>
  );
};

export default About;
