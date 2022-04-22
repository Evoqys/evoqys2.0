import React from 'react';
import SectionLayout from '../../components/SectionLayout';
import './Services.scss';

// @ts-ignore
import WebIcon from '../../images/icons/web.png';
// @ts-ignore
import MobileIcon from '../../images/icons/mobile.png';
// @ts-ignore
import DevopsIcon from '../../images/icons/devops.png';

// @ts-ignore
import Web from '../../images/web.svg';
// @ts-ignore
import Mobile from '../../images/mobile.svg';
// @ts-ignore
import Devops from '../../images/devops.svg';

const Services: React.FC = (props: any) => {
    return (
        <SectionLayout title='Our Services' id='services'>
            <div className='services'>
                <div className='service-card d-flex flex-column flex-md-row align-items-center py-5 px-4 my-5'>
                    <div>
                        <div className='d-flex align-items-center'>
                            <img src={MobileIcon} alt='Web'/>
                            <h4 className='ms-3'>Mobile development</h4>
                        </div>
                        <p className='mt-3'>
                            Through strategy, design and technology, we create professionally crafted mobile apps and
                            brand experiences that engage millions of consumers. We use modern technologies like React
                            Native and Flutter to deliver high performing, cross platform mobile apps.
                        </p>
                    </div>
                    <img src={Mobile} alt='Web' className='img-fluid'/>
                </div>


                <div className='service-card d-flex flex-column-reverse flex-md-row align-items-center py-5 px-4'>
                    <img src={Web} alt='Web' className='img-fluid'/>
                    <div className='ms-md-5'>
                        <div className='d-flex align-items-center'>
                            <img src={WebIcon} alt='Web'/>
                            <h4 className='ms-3'>Web development</h4>
                        </div>
                        <p className='mt-3'>
                            Using modern technologies, we deliver highly scalable, high performing and responsive web
                            apps, which will make your user experience best.
                        </p>
                    </div>
                </div>

                <div className='service-card d-flex flex-column flex-md-row align-items-center py-5 px-4 my-5'>
                    <div>
                        <div className='d-flex align-items-center'>
                            <img src={DevopsIcon} alt='Web'/>
                            <h4 className='ms-3'>DevOps</h4>
                        </div>
                        <p className='mt-3'>
                            We build products starting with automating the CI/CD so that the deployment process becomes
                            faster and smooth. DevOps enables you to get new features and products to market faster at
                            greater cost savings that can be invested elsewhere in your business.
                        </p>
                    </div>
                    <img src={Devops} alt='Web' className='img-fluid'/>
                </div>


            </div>


        </SectionLayout>
    );
};

export default Services;
