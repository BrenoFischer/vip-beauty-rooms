import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { BsPencilSquare } from 'react-icons/bs';

import CustomButton from '../button/button.component';

import { UserContext } from '../../context/user.context';

import './service.styles.scss';

function Service({img, id='', title='', shortDetails='', details='', preview=false}) {
  const { currentUser } = useContext(UserContext);
  const detailsState = {
    service: title,
    img: img,
    details: details,
  };

  const editServiceState = {
    id: id,
    title: title,
    img: img,
    details: details,
    shortDetails: shortDetails
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
      { currentUser &&
        <Link to='edit-service' state={editServiceState}>
          <div className='edit-container'>
            <BsPencilSquare />
          </div>
        </Link>
      }
    </li>
  );
}

export default Service;
