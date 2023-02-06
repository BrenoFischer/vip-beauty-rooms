import './footer.styles.scss';

import InstagramIcon from '@mui/icons-material/Instagram';
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
            <a href={anchor} target="_blank" rel="noreferrer">
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
                <h3 className='footer__logo'>Unique Beauty Limerick</h3>
            </div>
            <div className='footer__wrapper'>
                <div className='footer__section-container'>
                    <h3 className='footer__section-title'>Contact us</h3>
                    <div className='footer__section-links'>
                        <div className='footer__section-double'>
                            <FooterItem 
                                title="10 Thomas Street Limerick"
                                icon={<PlaceIcon sx={iconStyle}/>}
                                anchor='https://goo.gl/maps/tfn96PjYuBUuJuUk7'
                            />
                            <FooterItem 
                                title="@uniquebeautylimerick"
                                icon={<InstagramIcon sx={iconStyle}/>}
                                anchor='https://www.instagram.com/uniquebeautylimerick/'
                            />
                        </div>
                        <div className='footer__section-double'>
                            <FooterItem 
                                title="Unique Beauty Limerick"
                                icon={<FacebookIcon sx={iconStyle}/>}
                                anchor='https://www.facebook.com/profile.php?id=100089288214240'
                            />
                        </div>
                    </div>
                </div>
                <div className='footer__schedule-container'>
                    <h3 className='footer__schedule-title'>Opening hours</h3>
                    <ul className='footer__schedule-list'>
                        <li className='footer__schedule-item'>Monday - 10am to 6pm</li>
                        <li className='footer__schedule-item'>Tuesday - 10am to 6pm</li>
                        <li className='footer__schedule-item'>Wednesday - 10am to 6pm</li>
                        <li className='footer__schedule-item'>Thursday - 10am to 8pm</li>
                        <li className='footer__schedule-item'>Friday - 10am to 8pm</li>
                        <li className='footer__schedule-item'>Saturday - 10am to 5pm</li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default Footer;