import React, { useEffect } from 'react';
import './About.css';
import { FiDownload } from 'react-icons/fi';
import ScrollReveal from "scrollreveal";
import resume from '../../assets/SE_Srishan_Mandawala.pdf';
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
                            <br />
                            <p>
                                I am passionate about working with cutting-edge technologies like ReactJS, NodeJS, ExpressJS, NextJS, Spring Boot, MongoDB, and MySQL, which empower me to build dynamic, scalable, and responsive web applications. With expertise in these frameworks, I craft intuitive and strong front-end interfaces that provide smooth, user-focused experiences. My strong background in developing reusable components and implementing innovative features enhances application functionality.
                            </p>
                            <br />
                            <p>
                                By staying up-to-date with the latest trends and best practices, I ensure that my solutions are not only visually appealing but also high-performing across all devices. My technical skills allow me to create applications that are accessible, responsive, and aligned with industry standards, helping to meet both user expectations and project requirements.
                            </p>
                            <br />
                            <p>
                                On the back end, I specialize in building efficient, secure, and scalable systems that seamlessly integrate with front-end applications. From managing databases and optimizing server-side processes to implementing robust authentication and authorization protocols, I take a comprehensive approach to ensure reliable performance.
                            </p>
                            <br />
                            <p>
                                My focus is on bridging the gap between design and functionality, creating applications that are both technically sound and user-friendly. I am continuously motivated by the challenge of enhancing user experiences through innovative solutions, viewing each project as a chance for growth and learning.
                            </p>
                            <br />



                       
                            <div className="about-btn">
                                <a href={resume} download='Resume'>
                                    <button className="btn">
                                        Download CV <FiDownload />
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
                                    <img width="105%" src="https://www.vectorlogo.zone/logos/visualstudio_code/visualstudio_code-ar21.svg" alt="VS Code"/>
                                </code>
                                <code>
                                    <img width="105%" src="https://www.vectorlogo.zone/logos/getpostman/getpostman-ar21.svg" alt="Postman"/>
                                </code>
                                <code>
                                    <img width="105%" src="https://www.vectorlogo.zone/logos/nodejs/nodejs-ar21.svg" alt="Node.js"/>
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
