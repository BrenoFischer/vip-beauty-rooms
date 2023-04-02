import { useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import Services from '../services/services.component';
import Footer from '../../components/footer/footer.component';
import Posts from '../posts/posts.component';

import { getServicesAndDocuments, getOpeningHoursDocuments, getPostsAndDocuments } from "../../utils/firebase";
import { setServices } from '../../store/services/services.action';
import { setOpeningHours } from '../../store/openingHours/openingHours.action';
import { setPosts } from '../../store/posts/posts.action';

import './home.styles.scss';

function Home() {
  const servicesRef = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    async function getOpeningHours() {
      const currentOpeningHours = await getOpeningHoursDocuments();
      // console.log(currentOpeningHours);

      dispatch(setOpeningHours(currentOpeningHours));
    };

    async function fetchServices() {
        const allServices = await getServicesAndDocuments();
    
        dispatch(setServices(allServices));
    }

    async function fetchPosts() {
      const allPosts = await getPostsAndDocuments();
  
      dispatch(setPosts(allPosts));
  }
    
    getOpeningHours();
    fetchServices();
    fetchPosts();
  }, [dispatch]);
  

  const scrollToServices = (ref) => {
    window.scrollTo({
      top: ref.current.offSetTop,
      behavior: 'smooth'
    })
    servicesRef.current?.scrollIntoView({behavior: 'smooth'});
  }

  return (
    <>
      {/* <div className='icon-container' onClick={() => scrollToServices(servicesRef)}>
        <ExpandMoreIcon sx={{
          fontSize: '16rem',
          fontWeight: '100',
          color: "#15a246",
          transition: "all 0.2s",
          "&:hover": {
            color: "#11101d",
            cursor: 'pointer'
          }
        }}
        />
      </div> */}
      <div ref={servicesRef}></div>
      <Posts />
      <Services />
      <Footer />
    </>
  );
}

export default Home;
