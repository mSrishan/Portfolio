import React, { useEffect } from 'react';
import './About.css';
import { FiDownload } from 'react-icons/fi';
import ScrollReveal from "scrollreveal";
import resume from '../../assets/Resume.pdf';
import { FaCalendarAlt, FaGraduationCap } from 'react-icons/fa';

const About = () => {
    useEffect(() => {
        const srLeft = ScrollReveal({
            origin: "left",
            distance: "80px",
            duration: 2000,
            reset: true,
        });

        srLeft.reveal('.about-info', { delay: 100 });
    }, []);

    useEffect(() => {
        const srRight = ScrollReveal({
            origin: "right",
            distance: "80px",
            duration: 2000,
            reset: true,
        });

        srRight.reveal('.skills-box', { delay: 100 });
        srRight.reveal('.education-cards', { delay: 100 });
    }, []);

    return (
        <div>
            <div className="section" id="about">
                <div className="top-header">
                    <h1>About Me</h1>
                </div>
                <div className="row">
                    <div className="col">
                        <div className="about-info">
                            <h1>My introduction</h1>
                            <p>
                                I am passionate about working with modern technologies like React, Angular, and Spring Boot, which empower me to create dynamic, scalable, and highly responsive web applications. My expertise in these frameworks allows me to design intuitive, robust front-end interfaces that deliver smooth, user-centric experiences. I have a strong background in developing reusable components and implementing cutting-edge features that enhance the functionality of applications. By staying updated with the latest industry trends and best practices, I ensure that my front-end solutions are both visually appealing and high-performing across devices.
                            </p>
                            <p>
                                On the back-end side, I have experience building efficient, secure, and scalable systems that seamlessly integrate with front-end applications. Whether managing databases, optimizing server-side processes, or implementing authentication and authorization protocols, I take a holistic approach to ensure reliable performance. My goal is to bridge the gap between design and functionality by creating applications that are both technically sound and user-friendly. I am continuously driven by the challenge of improving user experience through creative problem-solving and innovative solutions, making each project an opportunity for growth and learning.


                            </p>
                            <div className="about-btn">
                                <a href={resume} download='Resume'>
                                    <button className="btn">
                                        Download Resume <FiDownload />
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="skills-box">
                            <div className="skills-header">
                                <h3>Technical Skills</h3>
                            </div>
                            <div className="skills-list">
                                <code>
                                    <img width="75%" src="https://www.vectorlogo.zone/logos/javascript/javascript-ar21.svg" alt="JavaScript"/>
                                </code>
                                <code>
                                    <img width="75%" src="https://www.vectorlogo.zone/logos/typescriptlang/typescriptlang-ar21.svg" alt="TypeScript"/>
                                </code>
                                <code>
                                    <img width="75%" src="https://www.vectorlogo.zone/logos/java/java-ar21.svg" alt="Java"/>
                                </code>
                                <code>
                                    <img width="75%" src="https://www.vectorlogo.zone/logos/angular/angular-ar21.svg" alt="Angular"/>
                                </code>
                                <code>
                                    <img width="75%" src="https://www.vectorlogo.zone/logos/reactjs/reactjs-ar21.svg" alt="React"/>
                                </code>
                                <code>
                                    <img width="105%" src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-ar21.svg" alt="Tailwind CSS"/>
                                </code>
                                <code>
                                    <img width="75%" src="https://www.vectorlogo.zone/logos/mysql/mysql-ar21.svg" alt="MySQL"/>
                                </code>
                                <code>
                                    <img width="75%" src="https://www.vectorlogo.zone/logos/mongodb/mongodb-ar21.svg" alt="MongoDB"/>
                                </code>
                                <code>
                                    <img width="75%" src="https://www.vectorlogo.zone/logos/figma/figma-ar21.svg" alt="Figma"/>
                                </code>
                                <code>
                                    <img width="75%" src="https://www.vectorlogo.zone/logos/expressjs/expressjs-ar21.svg" alt="Express"/>
                                </code>
                                <code>
                                    <img width="75%" src="https://www.vectorlogo.zone/logos/springio/springio-ar21.svg" alt="Spring"/>
                                </code>
                                <code>
                                    <img width="75%" src="https://www.vectorlogo.zone/logos/laravel/laravel-ar21.svg" alt="Laravel"/>
                                </code>
                                <code>
                                    <img width="105%" src="https://www.vectorlogo.zone/logos/visualstudio_code/visualstudio_code-ar21.svg" alt="VS Code"/>
                                </code>
                                <code>
                                    <img width="105%" src="https://www.vectorlogo.zone/logos/getpostman/getpostman-ar21.svg" alt="Postman"/>
                                </code>
                                <code>
                                    <img width="105%" src="https://www.vectorlogo.zone/logos/nodejs/nodejs-ar21.svg" alt="Node.js"/>
                                </code>
                                <code>
                                    <img width="105%" src="https://www.vectorlogo.zone/logos/flutterio/flutterio-ar21.svg" alt="Flutter"/>
                                </code>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
            <div className="education-cards">
                    <h2>Education</h2>
                    <div className="education-card">
                        <h3><FaGraduationCap size={24} color="green" /> Sabaragamuwa University Of Sri Lanka</h3>
                        <p><FaCalendarAlt size={18} color="gray" /> 2022 - Present</p>
                        <p>B.Sc. (Hons) in Computing and Information Systems</p>
                    </div>
                    <div className="education-card">
                        <h3><FaGraduationCap size={24} color="green" /> St. Aloysius' College</h3>
                        <p><FaCalendarAlt size={18} color="gray" /> 2019</p>
                        <p> Physical Science Stream</p>
                    </div>

                </div>
        </div>
    );
}

export default About;
