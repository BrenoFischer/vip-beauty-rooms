import NavImage from '../../components/navImage/navImage.component';

import ManicurePhoto from '../../assets/manicure.jpg';
import PedicurePhoto from '../../assets/pedicure.jpg';
import MassagePhoto from '../../assets/massage.jpg';
import EyelashPhoto from '../../assets/eyelash.jpg';
import GelnailsPhoto from '../../assets/gel-nails.jpg';

import './navigation.styles.scss';

function Navigation() {
  return (
    <>
      <nav className='nav'>
        <ul className='nav__list'>
          <li>Manicure</li>
          <li>Pedicure</li>
          <li>Massage</li>
          <li>Eyelash / Eyebrow</li>
          <li>Gel nails</li>
        </ul>
        <ul className='nav__images'>
          <NavImage img={ManicurePhoto} alt='manicure photo' />
          <NavImage img={PedicurePhoto} alt='pedicure photo' />
          <NavImage img={MassagePhoto} alt='massage photo' />
          <NavImage img={EyelashPhoto} alt='eyelash photo' special={true} />
          <NavImage img={GelnailsPhoto} alt='gelnails photo' />
      </ul>
      </nav>
    </>
  );
}

export default Navigation;
