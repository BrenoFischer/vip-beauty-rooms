import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { MdAddCircleOutline } from 'react-icons/md';

import { UserContext } from '../../context/user.context';
import { ServicesContext } from '../../context/services.context';

import Service from '../../components/service/service.component';
import CustomButton from '../../components/button/button.component';

import './services.styles.scss';
import SERVICES from '../../servicesData';

function Services() {
  const { currentUser } = useContext(UserContext);
  const { services } = useContext(ServicesContext);
  // const services = [SERVICES];
  const [ modalOpen, setModalOpen ] = useState(false);
  const [ confirmDelete, setConfirmDelete ] = useState(false);


  const Modal = () => {
    const onCancel = () => {
      setModalOpen(false);
    }

    const onConfirm = () => {
      setConfirmDelete(true);
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
    <> 
      <main className='services'>
        <div className='services__title-container'>
          <h1 className='services__title'>Our Services</h1>
          { currentUser &&
            <div className='add-service'>
              <Link to='/add-service'>
                <div className='add-service__icon'>
                  <MdAddCircleOutline />
                </div>
              </Link>
              <div className='add-service__tooltip'>
                <span className='add-service__tooltip-text'>Click here to add a new service</span>
              </div>
            </div>
          }
        </div>
        <ul className='services__list'>
          { services.map((service) => 
              <Service 
                key={service.id}
                id={service.id}
                img={service.imgUrl}
                alt={service.alt}
                title={service.title}
                details={service.details}
                shortDetails={service.shortDetails}
                setModalOpen={(bool) => setModalOpen(bool)}
                confirmDelete={confirmDelete}
                setConfirmDelete={(bool) => setConfirmDelete(bool)}
              />
            )
          }
        </ul>
        { modalOpen && 
          <Modal />
        }
      </main>
    </>
  );
}

export default Services;
