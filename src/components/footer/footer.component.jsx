import { useSelector } from 'react-redux';

import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import PlaceIcon from '@mui/icons-material/Place';
import { selectDaysMap } from '../../store/openingHours/openingHours.selector';

import './footer.styles.scss';

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
    const openingHours = useSelector(selectDaysMap);
    const {saturday, sunday, monday, tuesday, wednesday, thursday, friday} = openingHours;

    console.log(openingHours);

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
                        { Object.keys(openingHours).length !== 0 &&
                            <ul className='footer__schedule-list'>
                                <li className='footer__schedule-item'>Monday - {monday.open} to {monday.close}</li>
                                <li className='footer__schedule-item'>Tuesday - {tuesday.open} to {tuesday.close}</li>
                                <li className='footer__schedule-item'>Wednesday - {wednesday.open} to {wednesday.close}</li>
                                <li className='footer__schedule-item'>Thursday - {thursday.open} to {thursday.close}</li>
                                <li className='footer__schedule-item'>Friday - {friday.open} to {friday.close}</li>
                                <li className='footer__schedule-item'>Saturday - {saturday.open} to {saturday.close}</li>
                                <li className='footer__schedule-item'>Sunday - {sunday.open} to {sunday.close}</li>
                            </ul>
                        }
                </div>
            </div>
        </footer>
    );
}

export default Footer;