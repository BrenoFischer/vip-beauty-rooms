import './footer.styles.scss';

import InstagramIcon from '@mui/icons-material/Instagram';
import CallIcon from '@mui/icons-material/Call';
import FacebookIcon from '@mui/icons-material/Facebook';
import PlaceIcon from '@mui/icons-material/Place';

const FooterItem = ({ title, icon }) => {
    return(
    <div className='footer-item'>
        {icon}
        <h4 className='footer-item__title'>{title}</h4>
    </div>
    );
}

const Footer = () => {
    const iconStyle = {
        color: '#f1997e',
        fontSize: "2.5rem",
    };

    return(
        <footer className='footer'>
            <div className='footer__logo-container'>
                <h3 className='footer__logo'>Vip Beauty Rooms</h3>
            </div>
            <div className='footer__section-container'>
                <h3 className='footer__section-title'>Book an appoinment</h3>
                <div className='footer__section-double'>
                    <FooterItem 
                        title="61 Henry Street Limerick"
                        icon={<PlaceIcon sx={iconStyle}/>}
                    />
                    <FooterItem 
                        title="(87) 186 7306"
                        icon={<CallIcon sx={iconStyle}/>}
                    />
                </div>
                <div className='footer__section-double'>
                    <FooterItem 
                        title="@vipbeautyrooms.limerick"
                        icon={<InstagramIcon sx={iconStyle}/>}
                    />
                    <FooterItem 
                        title="Vip Beauty Rooms"
                        icon={<FacebookIcon sx={iconStyle}/>}
                    />
                </div>

            </div>
        </footer>
    );
}

export default Footer;