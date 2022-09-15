import Navigation from '../navigation/navigation.component';
import Header from '../../components/header/header.component';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import './home.styles.scss';

function Home() {
  return (
    <>
      <Header />
      <ExpandMoreIcon fontSize="large" />
      <Navigation />
    </>
  );
}

export default Home;
