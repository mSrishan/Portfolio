import React from 'react'
import HomeComponent from '../../components/home/HomeComponent'
import About from '../../components/about/About'
import Projects from '../../components/projects/Projects'
import Contact from '../../components/contact/Contact'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {
    return (
        <div className="wrapper">
            <HomeComponent />
            <About />
            <Projects />
            <Contact />
            <ToastContainer />
        </div>
    )
}

export default Home