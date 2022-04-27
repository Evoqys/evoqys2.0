import React from 'react';
import './Projects.scss';
import SectionLayout from '../../components/SectionLayout';
import ReactTooltip from 'react-tooltip'
// @ts-ignore
import Sbys from '../../images/sbys.jpeg';
// @ts-ignore
import Edvi from '../../images/edvi.png';
// @ts-ignore
import Ringbay from '../../images/ringbay.png';
// @ts-ignore
import Medox from '../../images/medox.png';
// @ts-ignore
import Explo from '../../images/explo.png';

// @ts-ignore
import Angular from '../../images/icons/angular.svg';
// @ts-ignore
import Flutter from '../../images/icons/flutter.svg';
// @ts-ignore
import Jhipster from '../../images/icons/jhipster.svg';
// @ts-ignore
import Node from '../../images/icons/node.svg';
// @ts-ignore
import Msql from '../../images/icons/msql.svg';
// @ts-ignore
import Psql from '../../images/icons/psql.svg';
// @ts-ignore
import Aws from '../../images/icons/aws.svg';
// @ts-ignore
import Dj from '../../images/icons/dj.svg';
// @ts-ignore
import Akita from '../../images/icons/akita.svg';
// @ts-ignore
import Mobx from '../../images/icons/mobx.svg';
// @ts-ignore
import Ant from '../../images/icons/ant.svg';
// @ts-ignore
import ReactIcon from '../../images/icons/react.svg';
// @ts-ignore
import Gql from '../../images/icons/graphql.svg';
// @ts-ignore
import Nest from '../../images/icons/nest.svg';
// @ts-ignore
import Agora from '../../images/icons/agora.svg';
// @ts-ignore
import Chakra from '../../images/icons/chakra.svg';
// @ts-ignore
import Netlify from '../../images/icons/netlify.svg';

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
    {
        image: Medox,
        description: 'Medox hospital provides online consultation services to their patients.\n' +
            'We build the complete product including backend, mobile app and frontend from scratch.',
        tech: [
            { image: ReactIcon, label: 'React' },
            { image: Gql, label: 'Graph QL' },
            { image: Chakra, label: 'Chakra UI' },
            { image: Nest, label: 'Nest JS' },
            { image: Msql, label: 'My Sql' },
            { image: Flutter, label: 'Flutter' },
            { image: Mobx, label: 'MobX' },
            { image: Agora, label: 'Agora' },
            { image: Aws, label: 'AWS' },
            { image: Netlify, label: 'Netlify' },
        ]
    },
    {
        image: Explo,
        description: 'Explo App lets GenZ explore the world\'s most exciting spots through personalized feeds, smart recommendations and short video content. Our main role was to write complete backend and mobile app from scratch and implement personalized recommendations using AWS.',
        tech: [
            { image: Dj, label: 'Django' },
            { image: Gql, label: 'Graph QL' },
            { image: Psql, label: 'Postgres' },
            { image: Flutter, label: 'Flutter' },
            { image: Mobx, label: 'MobX' },
            { image: Aws, label: 'AWS' },
        ]
    },
];

const Projects: React.FC = (props: any) => {
    return (
        <SectionLayout title='Our Projects' id='projects'>
            <div className='projects d-grid gap-3'>
                {
                    PROJECTS.map(project => (
                        <div className='grid d-flex flex-column align-items-center'>
                            <img className='rounded-2' src={project.image} alt='Project image' width='310' height='170'/>
                            <p className='mt-3'>{project.description}</p>
                            <div>
                                {
                                    project.tech.map(tech => (
                                        <img
                                            data-tip={tech.label}
                                            className='tech me-3 mt-2'
                                            src={tech.image}
                                            alt={tech.label}/>
                                    ))
                                }
                            </div>
                            <ReactTooltip backgroundColor='#162447' effect='solid'/>

                        </div>
                    ))
                }

            </div>
        </SectionLayout>
    );
};

export default Projects;
