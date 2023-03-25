import { useState } from 'react';
import { Link } from 'react-router-dom';
import { BsPencilSquare } from 'react-icons/bs';
import { AiOutlineDelete } from 'react-icons/ai';
import { useSelector, useDispatch } from 'react-redux';

import CustomButton from '../button/button.component';

import { deleteServiceDocument } from '../../utils/firebase';
import { getServicesAndDocuments } from '../../utils/firebase';
import { setServices } from '../../store/services/services.action';

import './service.styles.scss';

function Service({img, id='', title='', shortDetails='', details='', preview=false}) {
  const currentUser = useSelector((state) => state.user.currentUser);
  const [ modalOpen, setModalOpen ] = useState(false);
  const dispatch = useDispatch();

  console.log("montou");

  const detailsState = {
    service: title,
    img: img,
    details: details,
  };

  const editServiceState = {
    id: id,
    titleLoc: title,
    img: img,
    detailsLoc: details,
    shortDetailsLoc: shortDetails
  };

  const deleteService = () => {
    setModalOpen(true);
  }


  const Modal = () => {
    const onCancel = () => {
      setModalOpen(false);
    }

    const onConfirm = async () => {
      await deleteServiceDocument(id);
      setModalOpen(false);
      const allServices = await getServicesAndDocuments();
      dispatch(setServices(allServices));
    }

    return(
      <div className='modal'>
        <h2 className='modal__title'>Are you sure you want to delete this service?</h2>
        <div className='modal__buttons-container'>
          <div className='modal__button-wrapper'>
            <CustomButton 
              buttonText="Yes"
              onClickAction={onConfirm}
            />
          </div>
          <CustomButton 
            buttonText="No"
            secondaryStyle={true}
            onClickAction={onCancel}
          />
        </div>
      </div>
    );
  }

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
            <div className='service-image-container prod'>
              { img &&
                <img className='service-image' src={img} alt={title} />
              }
            </div>
          </Link>)
      }
      { currentUser && !preview &&
        <div className='actions-container'>
          <Link to='edit-service' state={editServiceState}>
            <div className='edit-container'>
              <BsPencilSquare />
            </div>
          </Link>

          <div className='delete-container' onClick={deleteService}>
            <AiOutlineDelete />
          </div>
        </div>
      }
      { modalOpen && 
          <Modal />
       }
    </li>
  );
}

export default Service;
