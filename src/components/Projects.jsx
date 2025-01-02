import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faArrowUpRightFromSquare, faTimes } from '@fortawesome/free-solid-svg-icons';
import data from '../utils/Projects.js';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTags, setSelectedTags] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      setProjects(data);
      setFilteredProjects(data);
    };
    fetchProjects();
  }, []);

  const handleTagClick = (tag) => {
    setSelectedTags((prevTags) => {
      const updatedTags = prevTags.includes(tag)
        ? prevTags.filter((t) => t !== tag)
        : [...prevTags, tag];
      return updatedTags;
    });
  };

  const handleSearchChange = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);

    const filtered = projects.filter((project) =>
      project.title.toLowerCase().includes(term) ||
      project.description.toLowerCase().includes(term)
    );
    setFilteredProjects(filtered);
  };

  const handleTagRemove = (tag) => {
    setSelectedTags((prevTags) => prevTags.filter((t) => t !== tag));
  };

  const filterProjectsByTags = () => {
    if (selectedTags.length === 0) return filteredProjects;

    return filteredProjects.filter((project) =>
      selectedTags.every((tag) => project.tags.includes(tag))
    );
  };

  const filteredByTagsProjects = filterProjectsByTags();

  const createProjectElement = (project) => {
    return (
      <div
        key={project.title}
        className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-4 flex flex-col items-start"
      >
        <h2 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
          {project.title}
        </h2>
        <p className="text-gray-700 dark:text-gray-400 mb-4">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="bg-orange-500 text-white py-1 px-4 rounded-full cursor-pointer"
              onClick={() => handleTagClick(tag)}
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex justify-between mt-auto w-full">
          {project.buttons.map((button) => {
            const btnStyle =
              button.icon === 'fa-brands fa-github'
                ? 'text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 me-2 mb-2'
                : 'text-white bg-[#2557D6] hover:bg-[#2557D6]/90 focus:ring-4 focus:ring-[#2557D6]/50 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#2557D6]/50 me-2 mb-2';
            return (
              <a
                key={button.text}
                href={button.link}
                target="_blank"
                rel="noopener noreferrer"
                className={btnStyle}
              >
                <FontAwesomeIcon icon={button.icon === 'fa-brands fa-github' ? faGithub : faArrowUpRightFromSquare} className="mr-2" />
                {button.icon === 'fa-brands fa-github' ? 'GitHub' : button.text}
              </a>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <main className="flex-grow container mx-auto p-6 mt-16 max-w-6xl">
      <h1 className="text-3xl font-semibold mb-6 text-white text-center">Projects</h1>
      <div className="relative mb-6 w-full md:w-2/3 mx-auto">
        <input
          type="text"
          id="search"
          className="w-full p-2 pl-10 rounded-lg bg-gray-800 text-white focus:outline-none"
          placeholder="Search projects"
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <FontAwesomeIcon icon={faTimes} className="absolute top-0 left-0 ml-3 mt-3 text-gray-400" />
      </div>
      <div
        id="selected-tags"
        className={`mb-4 space-x-2 flex-wrap flex ${selectedTags.length > 0 ? '' : 'hidden'}`}
      >
        {selectedTags.map((tag) => (
          <span
            key={tag}
            className="bg-blue-600 text-white py-1 px-2 rounded flex items-center space-x-2"
            data-tag={tag}
          >
            {tag}
            <button
              onClick={() => handleTagRemove(tag)}
              className="remove-tag-btn ml-2"
            >
              <FontAwesomeIcon icon={faTimes} />
            </button>
          </span>
        ))}
      </div>
      <div id="projects" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredByTagsProjects.map(createProjectElement)}
      </div>
    </main>
  );
};

export default Projects;
