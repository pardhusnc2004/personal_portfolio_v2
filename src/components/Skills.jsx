import React from "react";
import StackIcon from "tech-stack-icons";

const Skills = () => {
  const categories = {
    Languages: ["python", "java", "c++", "js"],
    "Frameworks and Libraries": [
      "reactjs",
      "nodejs",
      "mongoose",
      "vitejs",
      "tailwindcss",
      "bootstrap5"
    ],
    "Platforms and Technologies": [
      "aws",
      "mongodb",
      "postman",
      "postgresql",
      "mysql",
      "git",
      "github",
      "vscode",
      "bash",
      "linux",
    ],
  };
  return (
    <section className="glass-card mb-12 pt-8 md:pt-24 px-4 w-full">
      <div className="max-w-screen-xl mx-auto">
        <h1 className="text-2xl font-extrabold text-gray-900 text-center mb-8 md:text-3xl xl:text-4xl dark:text-white">
            My Skills
        </h1>
        {Object.keys(categories).map((category) => (
            <div key={category} className="mb-6">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">
                {category}
            </h3>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4">
                {categories[category].map((skill, index) => (
                <div
                    key={index}
                    className="flex flex-col items-center p-2 bg-gray-800 text-white rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-1 transition duration-200"
                >
                    <StackIcon name={skill} size={32} className="mb-2" />
                    <span className="text-xs font-medium capitalize text-center">
                    {skill.replace(/-/g, " ")}
                    </span>
                </div>
                ))}
            </div>
            </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;