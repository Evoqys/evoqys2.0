import React from 'react';
import './Projects.scss';
import SectionLayout from '../../components/SectionLayout';
// @ts-ignore
import Sbys from '../../images/sbys.png';
// @ts-ignore
import Edvi from '../../images/edvi.png';
// @ts-ignore
import Ringbay from '../../images/ringbay.png';

// @ts-ignore
import Angular from '../../images/icons/angular.png';
// @ts-ignore
import Flutter from '../../images/icons/flutter.png';
// @ts-ignore
import Jhipster from '../../images/icons/jhipster.png';
// @ts-ignore
import Node from '../../images/icons/node.png';
// @ts-ignore
import Msql from '../../images/icons/msql.png';
// @ts-ignore
import Psql from '../../images/icons/psql.png';
// @ts-ignore
import Aws from '../../images/icons/aws.png';
// @ts-ignore
import Dj from '../../images/icons/django.png';
// @ts-ignore
import Akita from '../../images/icons/akita.png';
// @ts-ignore
import Mobx from '../../images/icons/mobx.png';
// @ts-ignore
import Ant from '../../images/icons/ant.png';

type ProjectImage = { image: string, label: string };
type Project = { image: string, description: string, tech: ProjectImage[] };

const PROJECTS: Project[] = [
    {
        image: Sbys,
        description: 'StandBYStand is a digital platform to bring together the freelancers of the stand building industry and potential clients. Our main role was to add more modules to their existing code base.',
        tech: [
            { image: Angular, label: 'Angular' },
            { image: Jhipster, label: 'Jhipster' },
        ]
    },
    {
        image: Ringbay,
        description: 'Ringbay is a platform for managing sales, products and clients of a wholesaler.\n' +
            'We build the complete product including backend, dashboard and mobile app from scratch.',
        tech: [
            { image: Angular, label: 'Angular' },
            { image: Akita, label: 'Akita' },
            { image: Ant, label: 'Ant Design' },
            { image: Dj, label: 'Django' },
            { image: Aws, label: 'AWS' },
            { image: Psql, label: 'Postgres' },
            { image: Flutter, label: 'Flutter' },
            { image: Mobx, label: 'Mobx' },
        ]
    },
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
