import React from 'react';
import './Projects.scss';
import SectionLayout from '../../components/SectionLayout';
// @ts-ignore
import Sbys from '../../images/sbys.png';

type ProjectImage = { image: string, label: string };
type Project = { image: string, description: string, tech: ProjectImage[] };

const PROJECTS: Project[] = [
    {
        image: Sbys,
        description: 'StandBYStand is a digital platform to bring together the freelancers of the stand building industry and potential clients. Our main role was to add more modules to their existing code base.',
        tech: [
            { image: '', label: '' }
        ]
    }
];

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
