import React from 'react';
import LandingImage from '../../images/landing.svg';
import './Landing.scss';

const Landing: React.FC = (props: any) => {
    return (
        <div className='landing d-flex align-items-center justify-content-between mt-5'>
            <div>
                <h1 className='text-white'>
                    Alleviate <br/>
                    Application <br/>
                    Development.
                </h1>
                <h3 className='desc mt-4'>
                    <span className='brand-name'>Evo</span>lving <span className='brand-name'>Q</span>ualit<span
                    className='brand-name'>y</span> <span className='brand-name'>S</span>oftwares
                </h3>
                <button className='services btn btn-lg text-white mt-5'>
                    OUR SERVICES
                </button>
            </div>
            <img src={LandingImage} alt='Landing' className='img-fluid'/>
        </div>
    );
};

export default Landing;
