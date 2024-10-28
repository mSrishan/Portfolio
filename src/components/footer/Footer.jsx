import React from 'react'
import './Footer.css'
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { RiTelegramLine } from 'react-icons/ri'


const Footer = () => {
    return (
        <div className='footer'>
            <div className="top-footer">
                <p>SrishanMandawala</p>
            </div>
            <div className="middle-footer">
                <ul className="footer-menu">
                    <li className="footer-menu-list">
                        <a href="#home">Home</a>
                    </li>
                    <li className="footer-menu-list">
                        <a href="#about">About</a>
                    </li>
                    <li className="footer-menu-list">
                        <a href="#projects">Projects</a>
                    </li>
                    <li className="footer-menu-list">
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
            </div>
            <div className="footer-social-icons">
    <a href='https://www.instagram.com/_s_r_i_s_h_a_n/#' target='_blank' className="icon"><FaInstagram /></a>
    <a href='www.linkedin.com/in/srishan-mandawala-a09193232' target='_blank' className="icon"><FaLinkedin /></a>
    <a href='https://github.com/mSrishan' target='_blank' className="icon"><FaGithub /></a>
    <a href='https://www.facebook.com/srishan.mandawala?mibextid=ZbWKwL' target='_blank' className="icon"><FaFacebook size={21} /></a>
</div>

            <div className="bootom-footer">
                <p>Copyright &copy; <a href="#home">Srishan Mandawala</a> All rights reseved </p>
            </div>
        </div>
    )
}

export default Footer