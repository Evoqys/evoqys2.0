import React from 'react';
import './Footer.scss';
// @ts-ignore
import Logo from '../../images/logo.png';
// @ts-ignore
import Fb from '../../images/icons/FacebookLogo.png';
// @ts-ignore
import Insta from '../../images/icons/InstagramLogo.png';
// @ts-ignore
import Ln from '../../images/icons/LinkedinLogo.png';
// @ts-ignore
import Youtube from '../../images/icons/YoutubeLogo.png';
// @ts-ignore
import Phone from '../../images/icons/Phone.png';
// @ts-ignore
import Location from '../../images/icons/MapPin.png';
// @ts-ignore
import Mail from '../../images/icons/Envelope.png';


const Footer: React.FC = (props: any) => {
    return (
        <div className='footer mt-5'>
            <div>
                <img src={Logo} alt='Logo' className='img-fluid logo'/>
                <div className='d-flex align-items-center mt-4'>
                    <img className='icon' src={Location} alt='Location'/>
                    <div className='m-0 ms-3'>Sector 76, Noida, Uttar Pradesh - 201306</div>
                </div>
                <div className='d-flex align-items-center mt-2'>
                    <img className='icon' src={Mail} alt='Mail'/>
                    <a href='mailto:contact@evoqys.in' className='text-decoration-none m-0 ms-3'>contact@evoqys.in</a>
                </div>
                <div className='d-flex align-items-center mt-2'>
                    <img className='icon' src={Phone} alt='Mail'/>
                    <div className='m-0 ms-3'>8826667305, 7897984410</div>
                </div>
                <div className='mt-4 d-flex flex-column flex-md-row justify-content-between'>
                    <div>
                        <a target='_blank' href='https://www.facebook.com/evoqys-102174738163129'>
                            <img className='social' src={Fb} alt='Fb'/>
                        </a>
                        <a target='_blank' href='https://www.instagram.com/evoqys/'>
                            <img className='social' src={Insta} alt='Insta'/>
                        </a>
                        <a target='_blank' href='https://www.linkedin.com/company/69776723/admin/'>
                            <img className='social' src={Ln} alt='Linked'/>
                        </a>
                        <a target='_blank' href='https://www.youtube.com/channel/UCq9vvikYUbJ76fNGWw9sakw'>
                            <img className='social' src={Youtube} alt='Youtube'/>
                        </a>
                    </div>
                    <div className='copyright'>
                        <div className='divider'/>
                        <p className='mt-1'>© Evoqys - Evolving Quality Softwares</p>
                    </div>
                </div>

            </div>


        </div>
    );
};

export default Footer;
