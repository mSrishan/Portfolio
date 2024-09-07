import React from 'react'
import './Footer.css'
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { RiTelegramLine } from 'react-icons/ri'


const Footer = () => {
    return (
        <div className='footer'>
            <div className="top-footer">
                <p>QZB .</p>
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
                <div className="flex gap-[10px] items-center">
                    <a href='https://www.instagram.com/dev__angular/#' target='_blank' className="icon"><FaInstagram /></a>
                    <a href='https://www.linkedin.com/in/zafarbekqurbonboyev/' target='_blank' className="icon"><FaLinkedin /></a>
                    <a href='https://github.com/DasturchiQurbonboyev' target='_blank' className="icon"><FaGithub /></a>
                    <a href='https://t.me/Dasturchi_Qurbonboyev' target='_blank' className="icon"><RiTelegramLine size={21} /></a>
                </div>
            </div>
            <div className="bootom-footer">
                <p>Copyright &copy; <a href="#home">Zafarbek Qurbonboyev</a> All rights reseved </p>
            </div>
        </div>
    )
}

export default Footer