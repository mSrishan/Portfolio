import React, { useEffect } from 'react';
import ScrollReveal from "scrollreveal";
import BuildMate from '../../assets/home/BuildMate.jpg'; // Import your project images
import { FaReact, FaNodeJs, FaJava, FaPython } from 'react-icons/fa'; // Example technology icons
import { SiCss3, SiHtml5, SiDjango, SiMysql } from 'react-icons/si';
import "./Projects.css"

const projectData = [
    { image: BuildMate, name: 'BuildMate+', technologies: ['React', 'Node.js', 'Express','MongoDB '] },
    { image: BuildMate, name: 'Project Alpha', technologies: ['JavaScript', 'HTML', 'CSS'] },
    { image: BuildMate, name: 'Project Beta', technologies: ['Python', 'Django', 'MySQL'] },
    // { image: BuildMate, name: 'Project Gamma', technologies: ['React', 'Firebase'] },
    // { image: BuildMate, name: 'Project Delta', technologies: ['Vue.js', 'Node.js'] },
    // { image: BuildMate, name: 'Project Epsilon', technologies: ['Java', 'Spring Boot'] },
    // { image: BuildMate, name: 'Project Zeta', technologies: ['C#', 'ASP.NET'] },
    // { image: BuildMate, name: 'Project Eta', technologies: ['Swift', 'iOS'] },
    // { image: BuildMate, name: 'Project Theta', technologies: ['Kotlin', 'Android'] },
    // { image: BuildMate, name: 'Project Iota', technologies: ['PHP', 'Laravel'] },
    // { image: BuildMate, name: 'Project Kappa', technologies: ['Ruby', 'Rails'] },
    // { image: BuildMate, name: 'Project Lambda', technologies: ['JavaScript', 'React'] },
    // { image: BuildMate, name: 'Project Mu', technologies: ['Node.js', 'Express'] },
    // { image: BuildMate, name: 'Project Nu', technologies: ['Angular', 'TypeScript'] },
    // { image: BuildMate, name: 'Project Xi', technologies: ['Python', 'Flask'] },
    // { image: BuildMate, name: 'Project Omicron', technologies: ['HTML', 'CSS', 'JavaScript'] },
    // { image: BuildMate, name: 'Project Pi', technologies: ['Java', 'Android'] },
    // { image: BuildMate, name: 'Project Rho', technologies: ['Swift', 'iOS'] },
    // { image: BuildMate, name: 'Project Sigma', technologies: ['PHP', 'Symfony'] },
    // { image: BuildMate, name: 'Project Tau', technologies: ['C++', 'Qt'] },
    // { image: BuildMate, name: 'Project Upsilon', technologies: ['Go', 'Gin'] },
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
                        <div className="project-technologies">
                            {project.technologies.map((tech, techIndex) => (
                                <span key={techIndex} className="technology">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
