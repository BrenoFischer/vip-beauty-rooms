import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { MdAddCircleOutline } from 'react-icons/md';

import Service from '../../components/service/service.component';
import LoadingSpinner from '../../components/loadingSpinner/loadingSpinner.component';

import { getServicesAndDocuments } from "../../utils/firebase";
import { setServices } from '../../store/services/services.action';

import './services.styles.scss';


function Services() {
  const currentUser = useSelector((state) => state.user.currentUser);
  const services = useSelector((state) => state.services.services);

  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchServices() {
        const allServices = await getServicesAndDocuments();
    
        dispatch(setServices(allServices));
    }
    
    fetchServices();
  }, [dispatch]);

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
          { !services ? 
            <div>
              <LoadingSpinner />
            </div>
          :
            services.length === 0 ?
              <div>
                <LoadingSpinner />
              </div>
            :
              services.map((service) => 
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
