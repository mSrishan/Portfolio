import React, { useEffect, useState } from 'react'
import './Navbar.css'
import resume from '../../assets/Resume.pdf'

const Navbar = () => {
    const [responsive, setResponsive] = useState(false);
    const [scrollY, setScrollY] = useState(0);

    const handleScroll = () => {
        setScrollY(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = resume;
        link.download = 'Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const handleNavigation = (section) => {
        const target = document.querySelector(section);
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
        setResponsive(false);
    };

    return (
        <nav id="header" className={`${scrollY > 50 ? "shadow" : "noShadow"}`}>
            <div className="nav-logo">
                <p className="nav-name">Srishan</p>
                <span></span>
            </div>
            <div className={`nav-menu ${responsive ? `left-0 ${scrollY > 50 ? "top-[70px]" : "top-[80px]"}` : ""}`}>
                <ul className="nav__menu__list">
                    <li className="nav__list">
                        <button onClick={() => handleNavigation('#home')} className="nav__link">Home</button>
                    </li>
                    <li className="nav__list">
                        <button onClick={() => handleNavigation('#about')} className="nav__link">About</button>
                    </li>
                    <li className="nav__list">
                        <button onClick={() => handleNavigation('#projects')} className="nav__link">Projects</button>
                    </li>
                    <li className="nav__list">
                        <button onClick={() => handleNavigation('#contact')} className="nav__link">Contact</button>
                    </li>
                </ul>
            </div>
            <div className="nav-button">
                <button onClick={handleDownload} className="btn">
                    Download CV
                </button>
            </div>
            <div onClick={() => setResponsive(!responsive)} className="nav-menu-btn">
                <svg className='w-[25px]' xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" viewBox="0 0 24 24" id="bars">
                    <path fill="#6563FF" d="M20,11H4c-0.6,0-1,0.4-1,1s0.4,1,1,1h16c0.6,0,1-0.4,1-1S20.6,11,20,11z M4,8h16c0.6,0,1-0.4,1-1s-0.4-1-1-1H4C3.4,6,3,6.4,3,7S3.4,8,4,8z M20,16H4c-0.6,0-1,0.4-1,1s0.4,1,1,1h16c0.6,0,1-0.4,1-1S20.6,16,20,16z"></path>
                </svg>
            </div>
        </nav>
    );
};

export default Navbar;
