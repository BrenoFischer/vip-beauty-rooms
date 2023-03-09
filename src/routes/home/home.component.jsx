import { useRef, useContext } from 'react';

import Services from '../services/services.component';
import Header from '../../components/header/header.component';
import { UserContext } from '../../context/user.context';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import './home.styles.scss';
import Footer from '../../components/footer/footer.component';

function Home() {
  const servicesRef = useRef(null);
  const { currentUser } = useContext(UserContext);
  console.log(currentUser);

  const scrollToServices = (ref) => {
    window.scrollTo({
      top: ref.current.offSetTop,
      behavior: 'smooth'
    })
    servicesRef.current?.scrollIntoView({behavior: 'smooth'});
  }

  return (
    <>
      {/* <Header /> */}
      <div className='icon-container' onClick={() => scrollToServices(servicesRef)}>
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
      </div>
      <div ref={servicesRef}></div>
      <Services />
      <Footer />
    </>
  );
}

export default Home;
