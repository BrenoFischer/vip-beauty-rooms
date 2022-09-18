import { useLocation } from 'react-router-dom';
import Header from '../../components/header/header.component';

import './details.styles.scss';

const Details = () => {
    const location = useLocation();
    const { service, img, details } = location.state;

    return (
    <div>
        <Header />
        <h1>{service}</h1>
        <p>{details}</p>
        <img src={img}/>
    </div>
    );
}

export default Details;
