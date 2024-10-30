import React, { useEffect } from 'react';
import ScrollReveal from "scrollreveal";
import BuildMate from '../../assets/home/BuildMate.jpg';
import EduFlex from '../../assets/home/EduFlex.jpg';
import FrozenFantasy from '../../assets/home/FrozenFantasy.jpg';
import WOWSalon from '../../assets/home/WowSalon.jpg';
import GameScout from '../../assets/home/GameScout.jpg';
import Bankora from '../../assets/home/Bankora.jpg';
import { FaGithub } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';

import "./Projects.css";

const projectData = [
    {
        image: EduFlex,
        name: 'EduFlex',
        description: 'A student portal built with React, Node.js, and MongoDB that allows students to manage assignments and view their schedule.',
        technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
        demoLink: 'https://edu-flex-two.vercel.app/',
        githubLink: 'https://github.com/mSrishan/EduFlex.git'
    },
    {
        image: BuildMate,
        name: 'BuildMate+',
        description: 'A project management tool developed using React and Node.js for task tracking and collaboration.',
        technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
        demoLink: 'https://example.com/buildmate-demo',
        githubLink: 'https://github.com/mSrishan/BuildMate_Plus.git'
    },
    {
        image: FrozenFantasy,
        name: 'Frozen Fantasy',
        description: 'A web UI for an Ice Cream Shop built with React, Tailwind CSS and Framer Motion.',
        technologies: ['React', 'Tailwind CSS', 'Framer Motion'],
        demoLink: 'https://frozen-fantasy.vercel.app/',
        githubLink: 'https://github.com/mSrishan/Frozen-Fantasy.git'
    },
    {
        image: WOWSalon,
        name: 'WOW Salon',
        description: 'A web application for a salon built with NextJS, NodeJS, ExpressJS, MongoDB and Tailwind CSS.',
        technologies: ['NextJS', 'Tailwind CSS', 'Node.js', 'Express', 'MongoDB'],
        demoLink: 'https://example.com/wow-salon-demo',
        githubLink: 'https://github.com/mSrishan/WOW-Salon.git'
    },
    {
        image: Bankora,
        name: 'Bankora',
        description: 'A RESTful API for Banking Application.',
        technologies: ['Spring Boot', 'MySQL', 'Hibernate'],
        demoLink: 'https://example.com/bankora-demo',
        githubLink: 'https://github.com/mSrishan/Bankora.git'
    },
    {
        image: GameScout,
        name: 'GameScout',
        description: 'Game-Scout is a web app designed to help you discover new and exciting video games.',
        technologies: ['React'],
        demoLink: 'https://game-scout-kappa.vercel.app/',
        githubLink: 'https://github.com/mSrishan/Game-Scout.git'
    },
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
                                href={project.githubLink} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="project-link"
                            >
                                <FaGithub /> GitHub
                            </a>
                            <a 
                                href={project.demoLink} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="project-link"
                            >
                                <FiExternalLink /> Demo
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
