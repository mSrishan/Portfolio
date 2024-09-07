import React, { useEffect } from 'react'
import './About.css'
import { FiDownload } from 'react-icons/fi'
import ScrollReveal from "scrollreveal";
import resume from '../../assets/Resume.pdf'


const About = () => {



    useEffect(() => {

        const srLeft = ScrollReveal({
            origin: "left",
            distance: "80px",
            duration: 2000,
            reset: true,
        });

        srLeft.reveal('.about-info', { delay: 100 });
    }, [])

    useEffect(() => {
        const srRight = ScrollReveal({
            origin: "right",
            distance: "80px",
            duration: 2000,
            reset: true,
        });

        srRight.reveal('.skills-box', { delay: 100 });
    }, [])


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
                                I’m passionate about working with modern technologies like React, Angular, and Spring Boot, which empower me to build dynamic and scalable web applications. My experience with these cutting-edge frameworks allows me to design robust front-end interfaces and develop efficient back-end systems, ensuring seamless user experiences across platforms.


                            </p>
                            <div className="about-btn">
                                <a href={resume} download='Resume' >
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
                                    <img width="75%" src="https://www.vectorlogo.zone/logos/javascript/javascript-ar21.svg" />
                                </code>
                                <code>
                                    <img width="75%" src="https://www.vectorlogo.zone/logos/typescriptlang/typescriptlang-ar21.svg" />
                                </code>
                                <code>
                                    <img width="75%" src="https://www.vectorlogo.zone/logos/java/java-ar21.svg" />
                                </code>
                                <code>
                                    <img width="75%" src="https://www.vectorlogo.zone/logos/angular/angular-ar21.svg" />
                                </code>

                                <code>
                                    <img width="75%" src="https://www.vectorlogo.zone/logos/reactjs/reactjs-ar21.svg" />
                                </code>
                                <code>
                                    <img width="105%" src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-ar21.svg" />
                                </code>
                                <code>
                                    <img width="75%" src="https://www.vectorlogo.zone/logos/mysql/mysql-ar21.svg" />
                                </code>
                                <code>
                                    <img width="75%" src="https://www.vectorlogo.zone/logos/mongodb/mongodb-ar21.svg" />
                                </code>

                                   <code>
                                    <img width="75%" src="https://www.vectorlogo.zone/logos/figma/figma-ar21.svg" />
                                </code>
                                <code>
                                    <img width="75%" src="https://www.vectorlogo.zone/logos/expressjs/expressjs-ar21.svg" />
                                </code>
                                <code>
                                    <img width="75%" src="https://www.vectorlogo.zone/logos/springio/springio-ar21.svg" />
                                </code>
                                <code>
                                    <img width="75%" src="https://www.vectorlogo.zone/logos/laravel/laravel-ar21.svg" />
                                </code>

                                <code>
                                        <img width="105%" src="https://www.vectorlogo.zone/logos/visualstudio_code/visualstudio_code-ar21.svg" alt="VS Code"/>
                                    </code>
                                    <code>
                                        <img width="105%" src="https://www.vectorlogo.zone/logos/getpostman/getpostman-ar21.svg" alt="Postman"/>
                                </code>
                                <code>
                                        <img width="105%" src="https://www.vectorlogo.zone/logos/nodejs/nodejs-ar21.svg" alt="nodejs"/>
                                    </code>
                                    <code>
                                        <img width="105%" src="https://www.vectorlogo.zone/logos/flutterio/flutterio-ar21.svg" alt="flutterio"/>
                                    </code>

                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About