import { Link } from 'react-router-dom';
import CustomButton from '../button/button.component';

import './service.styles.scss';

function Service({img, alt, title, shortDetails, details}) {
  const detailsState = {
    service: title,
    img: img,
    alt: alt,
    details: details,
  };

  return (
    <li className='service'>
      <div className='service-left-container'>
        <div className='service-text-container'>
          <div className='service-title-container'>
            <h3 className='service-title'>{title}</h3>
          </div>
          <div className='service-details'>
            {shortDetails}
          </div>
        </div>
        <div className='service-button-container'>
          <Link to='details' state={detailsState}>
            <CustomButton buttonText="More details" />
          </Link>
        </div>
      </div>
      <Link to='details' state={detailsState}>
        <div className='service-image-container'>
          <img className='service-image' src={img} alt={alt} />
        </div>
      </Link>
    </li>
  );
}

export default Service;
