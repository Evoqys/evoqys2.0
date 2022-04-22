import React from 'react';
// @ts-ignore
import Logo from '/src/images/logo.png';

const Header:React.FC = (props: any) => {
    return (
        <nav className='header text-white d-flex justify-content-between align-items-center'>
            <img src={Logo} alt='Logo' className='img-fluid'/>
            <div className='d-none d-lg-block bg-black py-3 px-2 rounded-3'>
                <a href='#'>Home</a>
                <a href='#about'>About us</a>
                <a href='#services'>Services</a>
                <a href='#projects'>Our projects</a>
            </div>
            <a href='#contact-us' className='contact-us btn'>Contact us</a>
        </nav>
     );
};

export default Header;
