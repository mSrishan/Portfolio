import React, { useEffect, useState } from 'react';
import { FaArrowDown, FaRegEnvelope } from 'react-icons/fa';
import { FiPhone } from 'react-icons/fi';
import { LuSendHorizonal } from 'react-icons/lu';
import './Contact.css';
import ScrollReveal from "scrollreveal";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from 'emailjs-com';

const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!name || !email || !message) {
            toast.error("Please fill out all fields.");
            return;
        }

        setLoading(true);

        emailjs.sendForm('service_ajwdec6', 'template_zxl0wgg', e.target, 'Bc9hUzegTjGURSe0V')
            .then((result) => {
                setLoading(false);
                setName("");
                setEmail("");
                setMessage("");
                window.scrollTo(0, 0);
                toast.success("Thank you for your message! We'll get back to you soon.");
            }, (error) => {
                setLoading(false);
                toast.error("An error occurred. Please try again.");
            });
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
            </div>
            <div className="row">
                <div className="col">
                    <div className="contact-info">
                        <h2>Find Me  <FaArrowDown className='contact-icons' /></h2>
                        <p className='gmail'><FaRegEnvelope className='contact-icons' /> Email: srishanmandawala@gmail.com</p>
                        <p><FiPhone className='contact-icons' /> Tel: +94 76 439 8193</p>
                    </div>
                </div>
                <div className="col">
                    <div className="form-control">
                        <form onSubmit={handleSubmit}>
                            <div className="form-inputs">
                                <input
                                    required
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    type="text"
                                    className="input-field"
                                    name="name"
                                    placeholder='Name'
                                />
                                <input
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    type="email"
                                    className="input-field"
                                    name="email"
                                    placeholder='Email'
                                />
                            </div>
                            <div className="text-area">
                                <textarea
                                    required
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    className='textarea'
                                    name="message"
                                    placeholder='Message'
                                ></textarea>
                            </div>
                            <div className="form-button">
                                <button
                                    type="submit"
                                    className='btn'
                                    disabled={loading}
                                >Send <LuSendHorizonal className='contact-icons form-btn-icon' /></button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
