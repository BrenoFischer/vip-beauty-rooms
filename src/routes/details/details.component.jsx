import { Link, useLocation } from 'react-router-dom';

import Footer from '../../components/footer/footer.component';

import './details.styles.scss';
import CustomButton from '../../components/button/button.component';

const Details = () => {
    const location = useLocation();
    const { service, img, alt, details } = location.state;

    return (
    <>
        <div className='details'>
            <div className='details__item'>
                <img className='details__item-image' src={img} alt={alt} />
                <div className='details__item-title-container'>
                    <h1 className='details__item-title'>{service}</h1>
                </div>
                {details.map((detailText) => {
                    if(detailText === '_') return (<p>&nbsp;</p>);
                    return (<p>{detailText}</p>);
                })}
                <div className='details__item-button-container'>
                    <Link to='/'>
                        <CustomButton buttonText="Back to services" />
                    </Link>
                </div>
            </div>
        </div>
        <Footer />
    </>
    );
}

export default Details;
