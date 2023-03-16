import { Link } from 'react-router-dom';
import CustomButton from '../button/button.component';

import './service.styles.scss';

function Service({img, title='', shortDetails='', details='', preview=false}) {
  const detailsState = {
    service: title,
    img: img,
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
            <p>
              {shortDetails}
            </p>
          </div>
        </div>
        <div className='service-button-container'>
          { preview ?
              (
                <CustomButton buttonText="More details" />
              )
            :
              (<Link to='details' state={detailsState}>
                <CustomButton buttonText="More details" />
              </Link>)
          }
        </div>
      </div>
      { preview ?
          (<div className='service-image-container'>
            { img &&
              <img className='service-image' src={img} alt={title} />
            }
          </div>)
        :
          (<Link to='details' state={detailsState}>
            <div className='service-image-container'>
              { img &&
                <img className='service-image' src={img} alt={title} />
              }
            </div>
          </Link>)
      }
    </li>
  );
}

export default Service;
