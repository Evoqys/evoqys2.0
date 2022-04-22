import React from 'react';
import SectionLayout from '../../components/SectionLayout';
// @ts-ignore
import OurProcessImage from '../../images/our-process.svg';

const OurProcess:React.FC = (props: any) => {
    return (
        <SectionLayout title='Our process'>
            <p>
                We strictly follow the complete Software development lifecycle to ensure a single vision of a product for all the parties involved and better management control over the entire project.
            </p>
            <div className='d-flex align-items-md-center'>
                <img src={OurProcessImage} alt='Our process' className='img-fluid'/>
            </div>
        </SectionLayout>
     );
};

export default OurProcess;
