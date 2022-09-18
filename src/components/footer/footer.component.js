import './footer.styles.scss';

import InstagramIcon from '@mui/icons-material/Instagram';
import CallIcon from '@mui/icons-material/Call';
import FacebookIcon from '@mui/icons-material/Facebook';
import PlaceIcon from '@mui/icons-material/Place';

const FooterItem = ({ title, icon, anchor=null }) => {
    return(
        anchor == null ?
            <div className='footer-item'>
                {icon}
                <h4 className='footer-item__title'>{title}</h4>
            </div>
        :
            <a href={anchor} target="_blank">
                <div className='footer-item'>
                    {icon}
                    <h4 className='footer-item__title'>{title}</h4>
                </div>
            </a>
    );
}

const Footer = () => {
    const iconStyle = {
        color: '#f1997e',
        fontSize: "3rem",
    };

    return(
        <footer className='footer'>
            <div className='footer__logo-container'>
                <h3 className='footer__logo'>Vip Beauty Rooms</h3>
            </div>
            <div className='footer__section-container'>
                <h3 className='footer__section-title'>Contact us</h3>
                <div className='footer__section-links'>
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
                            anchor='https://www.instagram.com/vipbeautyrooms.limerick/'
                        />
                        <FooterItem 
                            title="Vip Beauty Rooms"
                            icon={<FacebookIcon sx={iconStyle}/>}
                            anchor='https://www.facebook.com/profile.php?id=100085425011126'
                        />
                    </div>
                </div>

            </div>
        </footer>
    );
}

export default Footer;