import { useLocation } from 'react-router-dom';

import Footer from '../../components/footer/footer.component';
import ServiceDetails from '../../components/service-details/service-details.component';

import './details-page.styles.scss';

const DetailsPage = () => {
    const location = useLocation();
    const { service, img, details } = location.state;

    return (
    <>
        <div className='details'>
            <ServiceDetails 
                title={service}
                img={img}
                details={details}
            />
        </div>
        <Footer />
    </>
    );
}

export default DetailsPage;
