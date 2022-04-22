import React from 'react';
import './About.scss';
import SectionLayout from '../../components/SectionLayout';
// @ts-ignore
import AboutImage from '../../images/about.svg';

const About: React.FC = (props: any) => {
    return (
        <SectionLayout title='About' id='about'>
            <div className='d-flex flex-column flex-md-row align-items-center'>
                <img src={AboutImage} alt='about'/>
                <p className='about mt-5 mt-md-0 ms-md-5'>
                    <span className='title'>E</span>voqys is the expert partner you need to deliver innovative, scalable, and competitive results. <br/>
                    We are a group of tech enthusiasts leading the digital transformation of our worldwide clients through our services. We have our own Youtube channel where we share a glimpse of our knowledge.
                </p>
            </div>

        </SectionLayout>
    );
};

export default About;
