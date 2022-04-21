import React from 'react';
import Logo from '/src/images/logo.png';

const Header:React.FC = (props: any) => {
    return (
        <nav className='header text-white d-flex justify-content-between'>
            <img src={Logo} alt='Logo' className='img-fluid'/>
            <div className='d-none d-lg-block'>
                <a href=''>Home</a>
                <a href=''>About us</a>
                <a href=''>Services</a>
                <a href=''>Our projects</a>
            </div>
            <button className='contact-us btn'>Contact us</button>
        </nav>
     );
};

export default Header;
