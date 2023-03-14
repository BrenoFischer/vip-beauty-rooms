import { Link } from 'react-router-dom';

import './service-details.styles.scss';
import CustomButton from '../../components/button/button.component';

const ServiceDetails = ({ title, img, details }) => {

    return (
        <div className='service-details'>
            <img className='service-details__image' src={img} alt={title} />
            <div className='service-details__title-container'>
                <h1 className='service-details__title'>{title}</h1>
            </div>
            <p className='service-details__text'>{details}</p>
            <div className='service-details__button-container'>
                <Link to='/'>
                    <CustomButton buttonText="Back to services" />
                </Link>
            </div>
        </div>
    );
}

export default ServiceDetails;
