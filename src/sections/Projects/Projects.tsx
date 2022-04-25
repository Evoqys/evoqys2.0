import React from 'react';
import './Projects.scss';
import SectionLayout from '../../components/SectionLayout';

const Projects: React.FC = (props: any) => {
    return (
        <SectionLayout title='Our Projects' id='projects'>
            <div className='projects d-grid gap-3'>
                <div className='grid'/>
            </div>
        </SectionLayout>
    );
};

export default Projects;
