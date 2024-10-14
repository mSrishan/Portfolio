import React, { useEffect, useRef } from 'react'
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'
import './Home.css'
import img1 from '../../assets/home/ProfileImg.jpeg'
import { LuMouse } from 'react-icons/lu'
import Typed from "typed.js";
import ScrollReveal from "scrollreveal";
import { RiTelegramLine } from 'react-icons/ri'
import resume from '../../assets/Resume.pdf'

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
        link.href = resume;
        link.download = 'Resume.pdf';
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
                        <p>I'am <span className='typedText' ref={typedElement}>Frontend Developer</span></p>
                    </div>
                    <div className="featured-text-info">
                        <p>I’m Srishan, a tech enthusiast from Galle, diving deep into full-stack development while pursuing my BSc. (Hons.) in Computing & Information Systems at Sabaragamuwa University. Always curious and driven, I’m passionate about crafting innovative solutions that push the boundaries of technology.

</p>
                    </div>
                    <div className="featured-text-btn">
                        <button onClick={handleDownload} className="btn">Download CV
                            <svg className='w-[25px] color-#c5c5c5' xmlns="http://www.w3.org/2000/svg " viewBox="0 0 24 24" id="file-download-alt ">
                                <path fill="#6563FF" d="M8,8a1,1,0,0,0,0,2H9A1,1,0,0,0,9,8Zm5,12H6a1,1,0,0,1-1-1V5A1,1,0,0,1,6,4h5V7a3,3,0,0,0,3,3h3v2a1,1,0,0,0,2,0V9s0,0,0-.06a1.31,1.31,0,0,0-.06-.27l0-.09a1.07,1.07,0,0,0-.19-.28h0l-6-6h0a1.07,1.07,0,0,0-.28-.19.29.29,0,0,0-.1,0A1.1,1.1,0,0,0,12.06,2H6A3,3,0,0,0,3,5V19a3,3,0,0,0,3,3h7a1,1,0,0,0,0-2ZM13,5.41,15.59,8H14a1,1,0,0,1-1-1ZM14,12H8a1,1,0,0,0,0,2h6a1,1,0,0,0,0-2Zm6.71,6.29a1,1,0,0,0-1.42,0l-.29.3V16a1,1,0,0,0-2,0v2.59l-.29-.3a1,1,0,0,0-1.42,1.42l2,2a1,1,0,0,0,.33.21.94.94,0,0,0,.76,0,1,1,0,0,0,.33-.21l2-2A1,1,0,0,0,20.71,18.29ZM12,18a1,1,0,0,0,0-2H8a1,1,0,0,0,0,2Z"></path>
                            </svg>
                        </button>
                    </div>
                    <div className="social-icons">
                        {/* <a href='https://www.instagram.com/_s_r_i_s_h_a_n?igsh=MWhlb3ZyenJieDNvcg==' target='_blank' className="icon"><FaInstagram /></a> */}
                        <a href='https://www.linkedin.com/in/srishan-mandawala-a09193232' target='_blank' className="icon"><FaLinkedin /></a>
                        <a href='https://github.com/mSrishan' target='_blank' className="icon"><FaGithub /></a>
                        {/* <a href='https://t.me/Dasturchi_Qurbonboyev' target='_blank' className="icon"><RiTelegramLine size={21} /></a> */}
                    </div>
                </div>
                <div className="featured-image">
                    <div className="image">
                        <img src={img1} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeComponent
