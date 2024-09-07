import React, { useEffect, useState } from 'react';
import { FaArrowDown, FaRegEnvelope } from 'react-icons/fa';
import { FiPhone } from 'react-icons/fi';
import { LuSendHorizonal } from 'react-icons/lu';
import './Contact.css';
import ScrollReveal from "scrollreveal";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Toast xabarlarining uslubi

const BOT_TOKEN = "7221321582:AAGYasuxRfAK17hC0HR5ED0KfMbVPKKWVFs";
const CHAT_ID = "-4218604797";

const Contact = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);

    const handlePayment = (e) => {
        e.preventDefault(); // Form yuborilishini to'xtatamiz

        if (!name || !email || !message) {
            toast.error("Iltimos barcha maydonlarni to'ldiring.");
            return; // Agar biron maydon bo'sh bo'lsa, xabar yuborilmasin
        }

        setLoading(true); // Set loading to true when sending the message

        let text = "Ish Beruchi %0A%0A";
        text += `Ismi: ${name} %0A`;
        text += `Email: ${email} %0A%0A`;
        text += `ISH BERUVCHINING: ${message} %0A`;

        let url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${text}&parse_mode=html`;
        let api = new XMLHttpRequest();
        api.open("GET", url, true);

        api.onload = function () {
            setLoading(false); // Set loading to false when message sent successfully
            setName("");
            setEmail("");
            setMessage("");
            window.scrollTo(0, 0);
            toast.success("Xabaringiz uchun raxmat! Tez orada siz bilan bog'lanaman");

        };
        api.onerror = function () {
            setLoading(false); // Set loading to false on error
            toast.error("Xatolik yuz berdi, iltimos qayta urinib ko'ring");
        };
        api.send();
    };

    useEffect(() => {
        const srLeft = ScrollReveal({
            origin: "left",
            distance: "80px",
            duration: 2000,
            reset: true,
        });

        srLeft.reveal('.contact-info', { delay: 100 });
    }, []);

    useEffect(() => {
        const srRight = ScrollReveal({
            origin: "right",
            distance: "80px",
            duration: 2000,
            reset: true,
        });

        srRight.reveal('.form-control', { delay: 100 });
    }, []);

    return (
        <div className='section' id='contact'>
            <div className="top-header">
                <h1>Get in touch</h1>
                <span>Do you have a project in your mind, contact me here</span>
            </div>
            <div className="row">
                <div className="col">
                    <div className="contact-info">
                        <h2>Find Me  <FaArrowDown className='contact-icons' /></h2>
                        <p className='gmail'><FaRegEnvelope className='contact-icons' /> Email:dasturchiqurbonboyev@gmail.com</p>
                        <p><FiPhone className='contact-icons' /> Tel: +998990955904</p>
                    </div>
                </div>
                <div className="col">
                    <div className="form-control">
                        <div className="form-inputs">
                            <input required
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                type="text"
                                className="input-field"
                                placeholder='Name'
                            />
                            <input
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                type="email"
                                className="input-field"
                                placeholder='Email'
                            />
                        </div>
                        <div className="text-area">
                            <textarea
                                required
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                className='textarea'
                                placeholder='Message'
                            ></textarea>
                        </div>
                        <div className="form-button">
                            <button
                                onClick={handlePayment}
                                className='btn'
                                disabled={loading}
                            >Send <LuSendHorizonal className='contact-icons form-btn-icon' /></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
