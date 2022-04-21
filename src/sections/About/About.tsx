import React from 'react';
import './About.scss';
import SectionLayout from '../../components/SectionLayout';
// @ts-ignore
import AboutImage from '../../images/about.svg';

const About: React.FC = (props: any) => {
    return (
        <SectionLayout title='About'>
            <div className='d-flex align-items-center justify-content-between'>
                <img src={AboutImage} alt='about'/>
                <p className='about w-75'>
                    <span className='title'>E</span>voqys is the expert partner you need to deliver innovative, scalable, and competitive results. <br/>
                    We are a group of tech enthusiasts leading the digital transformation of our worldwide clients through our services. We have our own Youtube channel where we share a glimpse of our knowledge.
                </p>
            </div>

        </SectionLayout>
    );
};

export default About;
