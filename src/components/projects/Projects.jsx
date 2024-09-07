import React, { useEffect } from 'react'
import { BiBriefcaseAlt2 } from 'react-icons/bi'
import { LuUsers2 } from 'react-icons/lu'
import { TbAward } from 'react-icons/tb'
import ScrollReveal from "scrollreveal";

const Projects = () => {


    useEffect(() => {

        const sr = ScrollReveal({
            origin: "top",
            distance: "80px",
            duration: 2000,
            reset: true,
        });

        sr.reveal('.top-header', {});
        sr.reveal('.projects-box', { interval: 200 });
    }, [])


    return (
        <div className='section' id='projects'>
            <div className="top-header">
                <h1>Projects</h1>

            </div>
            <div className="projects-container">
                <div className="projects-box">
                    <BiBriefcaseAlt2 className='project-box-icons' />
                    <h3>Completed</h3>
                    <h5 className='label' >15+ Finished Projects</h5>
                </div>
                <div className="projects-box">
                    <LuUsers2 className='project-box-icons' />
                    <h3>Clients</h3>
                    <h5 className='label' >25+ Happy clients</h5>
                </div>
                <div className="projects-box">
                    <TbAward className='project-box-icons' />
                    <h3>Experience</h3>
                    <h5 className='label' >7+ Years in the field</h5>
                </div>
            </div>
        </div>
    )
}

export default Projects