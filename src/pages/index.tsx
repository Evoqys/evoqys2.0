import * as React from 'react';
import '../styles/main.scss';
import Header from '../sections/Header/Header';
import Landing from '../sections/Landing/Landing';
import About from '../sections/About/About';

// markup
const IndexPage = () => {
    return (
        <div className='container'>
            <Header/>
            <Landing/>
            <About/>
        </div>
    );
};

export default IndexPage;
