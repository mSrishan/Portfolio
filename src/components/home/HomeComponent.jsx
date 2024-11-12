import React, { useEffect, useRef } from 'react';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import './Home.css';
import img1 from '../../assets/home/ProfileImg.jpeg';
import { LuMouse } from 'react-icons/lu';
import Typed from "typed.js";
import ScrollReveal from "scrollreveal";
import { RiTelegramLine } from 'react-icons/ri';
import SE_Srishan_Mandawala from '../../assets/SE_Srishan_Mandawala.pdf';

const HomeComponent = () => {
    const typedElement = useRef(null);

    useEffect(() => {
        const sr = ScrollReveal({
            origin: "top",
            distance: "80px",
            duration: 2000,
            reset: true,
        });

        sr.reveal('.featured-text-card', {});
        sr.reveal('.featured-name', { delay: 100 });
        sr.reveal('.featured-text-info', { delay: 200 });
        sr.reveal('.featured-text-btn', { delay: 200 });
        sr.reveal('.social-icons', { delay: 200 });
        sr.reveal('.featured-image', { delay: 300 });
        sr.reveal('.scroll-btn', { delay: 200 });

        const options = {
            strings: ["Full-Stack Developer", "Spring Enthusiast", "MERN Enthusiast"],
            loop: true,
            typeSpeed: 100,
            backSpeed: 80,
            backDelay: 2000,
        };

        const typed = new Typed(typedElement.current, options);

        return () => {
            typed.destroy();
        };
    }, []);

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = SE_Srishan_Mandawala;
        link.download = 'SE_Srishan_Mandawala.pdf';
        link.click();
    };

    return (
        <div>
            <div className='featured-box' id='home'>
                <div className="featured-text">
                    <div className="featured-text-card">
                        <span>Srishan Mandawala</span>
                    </div>
                    <div className="featured-name">
                        <p>I am <span className='typedText' ref={typedElement}>Frontend Developer</span></p>
                    </div>
                    <div className="featured-text-info">
                        <p>I’m Srishan, a tech enthusiast from Galle, diving deep into full-stack development while pursuing my BSc. (Hons.) in Computing & Information Systems at Sabaragamuwa University. Always curious and driven, I’m passionate about crafting innovative solutions that push the boundaries of technology.</p>
                    </div>
                    <div className="featured-text-btn">
                        <button onClick={handleDownload} className="Hbtn">Download CV</button>
                    </div>
                    <div className="social-icons">
                        <a href='https://www.linkedin.com/in/srishan-mandawala-a09193232' target='_blank' className="icon"><FaLinkedin /></a>
                        <a href='https://github.com/mSrishan' target='_blank' className="icon"><FaGithub /></a>
                    </div>
                </div>
                <div className="featured-image">
                    <div className="image">
                        <img src={img1} alt="Profile" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeComponent;
