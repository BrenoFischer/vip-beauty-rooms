import { useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Services from '../services/services.component';
import Footer from '../../components/footer/footer.component';
import Posts from '../posts/posts.component';

import { getOpeningHoursDocuments } from "../../utils/firebase";
import { setOpeningHours } from '../../store/openingHours/openingHours.action';

import './home.styles.scss';

function Home() {
  const servicesRef = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    async function getOpeningHours() {
      const currentOpeningHours = await getOpeningHoursDocuments();

      dispatch(setOpeningHours(currentOpeningHours));
    };

    getOpeningHours();
  }, [dispatch]);
  

  // const scrollToServices = (ref) => {
  //   window.scrollTo({
  //     top: ref.current.offSetTop,
  //     behavior: 'smooth'
  //   })
  //   servicesRef.current?.scrollIntoView({behavior: 'smooth'});
  // }

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
