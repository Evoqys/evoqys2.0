import React from 'react';
import SectionLayout from '../../components/SectionLayout';
// @ts-ignore
import OurProcessImage from '../../images/our-process.svg';
// @ts-ignore
import Deploy from '../../images/icons/deploy.png';
// @ts-ignore
import Design from '../../images/icons/design.png';
// @ts-ignore
import Dev from '../../images/icons/dev.png';
// @ts-ignore
import Maintain from '../../images/icons/maintain.png';
// @ts-ignore
import Requirement from '../../images/icons/req-analysis.png';

const PROCESS = [
    {
        icon: Requirement,
        title: 'Requirement analysis',
        description: 'We thoroughly interact with the client to collect and document the project requirements.'
    },
    {
        icon: Design,
        title: 'Design',
        description: 'Collaborating with the best designers, we create the architecture of the software and its elements by ensuring the best user experience and designs.'
    },
    {
        icon: Dev,
        title: 'Development',
        description: 'Building the software using the appropriate technology which fits best for the project use case. We strictly follow all the best practices and write clean and maintainable code.'
    },
    {
        icon: Deploy,
        title: 'Deployment',
        description: 'We use continuous integration and delivery mechanisms to deploy the software so that targeted users can use it. Using this approach we can quickly push new changes to the software in no time.'
    },
    {
        icon: Maintain,
        title: 'Maintenance',
        description: 'We update and maintain the software after it\'s delivered to the client. Adding new features, correcting any bugs are all included under maintenance.'
    },
];


const Step: React.FC<{ image: any, title: string, desc: string }> = ({ image, title, desc }) => (
    <div className='d-flex my-2'>
        <img width='40' height='40' src={image} alt='Requirement'/>
        <div className='d-flex flex-column ms-4'>
            <h6 className='text-white'>{title}</h6>
            <p>{desc}</p>
        </div>
    </div>
);


const OurProcess: React.FC = (props: any) => {
    return (
        <SectionLayout title='Our Process'>
            <p>
                We strictly follow the complete Software development lifecycle to ensure a single vision of a product
                for all the parties involved and better management control over the entire project.
            </p>
            <div className='d-flex flex-column flex-md-row align-items-md-center justify-content-between'>
                <img src={OurProcessImage} alt='Our process' className='img-fluid'/>
                <div className='ms-md-5 mt-4'>
                    {
                        PROCESS.map(p => (
                            <Step
                                image={p.icon}
                                title={p.title}
                                desc={p.description}
                            />

                        ))
                    }
                </div>

            </div>
        </SectionLayout>
    );
};

export default OurProcess;
