//Projects.js
import React, { useState, useEffect } from 'react';
import Carousel from 'react-round-carousel';

import Modal from './Modal/modal.js';

import projects from '../Data/projects.js';
import '../css/Project.css';
import '../css/carousel.css';

function Projects() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [currentProject, setCurrentProject] = useState(projects[0]);

    // Monitor Screen Size
    useEffect(() => {
        function handleResize() {
            setWindowWidth(window.innerWidth);
        }

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    // Create an array of Carousel Items
    const items = projects.map((project) => ({
        alt: '',
        image: project.img,
        content: (
            <div
                 onClick={() => handleOpenModal(project)}
                className="carousel__content"
            >
                <strong>{project.title}</strong>
                <span>{project.shortDesc}</span>
            </div>
        ),
    }));

    // Open modal
    function handleOpenModal(project) {
        setIsModalOpen(!isModalOpen);
        setCurrentProject(project);
        document.body.style.overflow = 'hidden';
    }

    // Close modal
    function handleCloseModal() {
        setIsModalOpen(!isModalOpen);
        document.body.style.overflow = 'unset';
    }

    return (
        <div id="projects" className="ProjectsContainer">
                <div className="ProjectsWrapper container">
                    <h2 className="projectHeading"
                        data-aos="fade-down"
                        data-aos-duration="1000"
                        data-aos-once="true"
                        padding-top ="0"
                    >
                         Major Projects
                    </h2>
                    <Carousel
                        items={items}
                        itemWidth={
                            windowWidth <= 960
                                ? windowWidth <= 600
                                    ? 280
                                    : 500
                                : 900
                        }
                    />

                   
                </div>
                {isModalOpen && (
                <Modal
                    modalOpen={isModalOpen}
                    currentProject={currentProject}
                    closeModal={handleCloseModal}
                />
            )}

                    <div className="githubContainer">

                            <a 
                                href="https://github.com/parthpatel-15" 
                                target="https://github.com/parthpatel-15"
                                //rel="noopener noreferrer"
                                >
                                    <img
                                        // className="githubIcon"
                                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                                        alt=""
                                        width={60}
                                    />
                                    Other Projects
                            </a>
                            {/* <a
                                href="https://github.com/parthpatel-15"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="githubLink"
                            >
                                <button className="githubButton">
                                    My Other Projects
                                </button>
                            </a> */}
                    </div>
        </div>
    );
}

export default Projects;
