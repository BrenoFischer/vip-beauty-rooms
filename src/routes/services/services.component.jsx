import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { MdAddCircleOutline } from 'react-icons/md';

import { UserContext } from '../../context/user.context';
import { ServicesContext } from '../../context/services.context';

import Service from '../../components/service/service.component';
import CustomButton from '../../components/button/button.component';

import './services.styles.scss';
import SERVICES from '../../servicesData';
import LoadingSpinner from '../../components/loadingSpinner/loadingSpinner.component';

function Services() {
  const { currentUser } = useContext(UserContext);
  // const { services } = useContext(ServicesContext);
  const services = [SERVICES];

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
          { !services[0] ? 
            <div>
              <LoadingSpinner />
            </div>
          :        
            services[0].map((service) => 
                <Service 
                  key={service.id}
                  id={service.id}
                  img={service.imgUrl}
                  alt={service.alt}
                  title={service.title}
                  details={service.details}
                  shortDetails={service.shortDetails}
                />
              )
          }
        </ul>
      </main>
    </>
  );
}

export default Services;
