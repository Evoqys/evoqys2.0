import * as React from 'react';
import '../styles/main.scss';
import 'animate.css';
import Header from '../sections/Header/Header';
import Landing from '../sections/Landing/Landing';
import About from '../sections/About/About';
import OurProcess from '../sections/OurProcess/OurProcess';
import Services from '../sections/Services/Services';
import ContactUs from '../sections/Contact-us/ContactUs';
import Footer from '../sections/Footer/Footer';
import Projects from '../sections/Projects/Projects';

// markup
const IndexPage = () => {
    return (
        <div className='container'>
            <Header/>
            <Landing/>
            <About/>
            <OurProcess/>
            <Services/>
            <Projects/>
            <ContactUs/>
            <Footer/>
        </div>
    );
};

export default IndexPage;
