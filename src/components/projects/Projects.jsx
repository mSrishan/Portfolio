import React, { useEffect } from 'react';
import ScrollReveal from "scrollreveal";
import BuildMate from '../../assets/home/BuildMate.jpg'; // Import your project images
import EduFlex from '../../assets/home/EduFlex.jpg'; // Import your project images
import FrozenFantasy from '../../assets/home/FrozenFantasy.jpg'; // Import your project images
import WOWSalon from '../../assets/home/WowSalon.jpg'; // Import your project images
import { FaReact, FaNodeJs, FaJava, FaPython, FaVideo, FaGithub } from 'react-icons/fa'; // Added icons
import { SiCss3, SiHtml5, SiDjango, SiMysql } from 'react-icons/si';

import "./Projects.css";

const projectData = [
    {
        image: EduFlex,
        name: 'EduFlex',
        description: 'A student portal built with React, Node.js, and MongoDB that allows students to manage assignments and view their schedule.',
        technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
        videoLink: 'https://example.com/edu-flex-video', // Add your video link
        githubLink: 'https://github.com/your-username/edu-flex' // Add your GitHub link
    },
    {
        image: BuildMate,
        name: 'BuildMate+',
        description: 'A project management tool developed using React and Node.js for task tracking and collaboration.',
        technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
        videoLink: 'https://example.com/buildmate-video', // Add your video link
        githubLink: 'https://github.com/your-username/buildmate' // Add your GitHub link
    },
    {
        image: FrozenFantasy,
        name: 'Frozen Fantasy',
        description: 'A web UI for an Ice Cream Shop built with React, Tailwind CSS and Framer Motion.',
        technologies: ['React', 'Tailwind CSS', 'Framer Motion'],
        videoLink: 'https://example.com/project-beta-video', // Add your video link
        githubLink: 'https://github.com/mSrishan/Frozen-Fantasy' // Add your GitHub link
    },
    
    {
        image: WOWSalon,
        name: 'WOW Salon',
        description: 'A web application for a salon built with NextJS, NodeJS, ExpressJS, MongoDB and Tailwind CSS.',
        technologies: ['NextJS', 'Tailwind CSS', 'Node.js', 'Express', 'MongoDB'],
        videoLink: 'https://example.com/project-beta-video', // Add your video link
        githubLink: 'https://github.com/mSrishan/Frozen-Fantasy' // Add your GitHub link
    },
    {
        image: EduFlex,
        name: 'EduFlex',
        description: 'A student portal built with React, Node.js, and MongoDB that allows students to manage assignments and view their schedule.',
        technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
        videoLink: 'https://example.com/edu-flex-video', // Add your video link
        githubLink: 'https://github.com/your-username/edu-flex' // Add your GitHub link
    },
    {
        image: BuildMate,
        name: 'BuildMate+',
        description: 'A project management tool developed using React and Node.js for task tracking and collaboration.',
        technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
        videoLink: 'https://example.com/buildmate-video', // Add your video link
        githubLink: 'https://github.com/your-username/buildmate' // Add your GitHub link
    },
    // Add more projects here...
];

const Projects = () => {
    useEffect(() => {
        const sr = ScrollReveal({
            origin: "top",
            distance: "80px",
            duration: 2000,
            reset: true,
        });

        sr.reveal('.top-header', {});
        sr.reveal('.project-item', { interval: 200 });
    }, []);

    return (
        <div className='section' id='projects'>
            <div className="top-header">
                <h1>Projects</h1>
            </div>
            <div className="projects-container">
                {projectData.map((project, index) => (
                    <div key={index} className="project-item">
                        <img src={project.image} alt={project.name} className="project-image" />
                        <h3 className="project-name">{project.name}</h3>
                        <p className="project-description">{project.description}</p>
                        <div className="project-technologies">
                            {project.technologies.map((tech, techIndex) => (
                                <span key={techIndex} className="technology">
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <div className="project-links">
                            <a 
                                href={project.videoLink} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="project-link"
                            >
                                <FaVideo /> Video
                            </a>
                            <a 
                                href={project.githubLink} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="project-link"
                            >
                                <FaGithub /> GitHub
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
