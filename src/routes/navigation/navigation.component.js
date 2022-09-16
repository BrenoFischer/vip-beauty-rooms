import NavItem from '../../components/navItem/navItem.component';

import ManicurePhoto from '../../assets/manicure.jpg';
import PedicurePhoto from '../../assets/pedicure.jpg';
import MassagePhoto from '../../assets/massage.jpg';
import EyelashPhoto from '../../assets/eyelash.jpg';
import GelnailsPhoto from '../../assets/gel-nails.jpg';

import './navigation.styles.scss';

function Navigation(props) {
  return (
    <> 
      <nav className='nav'>
        <h1 className='nav__title'>Our Services</h1>
        <ul className='nav__list'>
          <NavItem img={ManicurePhoto} alt='manicure photo' title='Manicure'>
            <p>3 week manicure</p>
            <p>Mini pedicure</p>
            {/* <p>Back massage</p>
            <p>Only €75.00</p> */}
          </NavItem>

          <NavItem img={PedicurePhoto} alt='pedicure photo' title='Pedicure'>
            <p>Full Pedicure</p>
            <p>Mini Pedicure</p>
            {/* <p>Full Pedicure  €39.00 - 45 mins</p>
            <p>Mini Pedicure  €19.00 - 25 mins</p> */}
          </NavItem>

          <NavItem img={MassagePhoto} alt='massage photo' title='Massage'>
            <p>Relaxation Massage</p>
            <p>Deep Tissue Massage</p>
            <p>Indian Head Massage</p>
            {/* <p>1 hour - €50.00</p>
            <p>45mins - €45.00</p>
            <p>30mins - €35.00</p> */}
          </NavItem>

          <NavItem img={EyelashPhoto} alt='eyelash photo' title='Eyelash / Eyebrow'>
            <p>Eye Lash</p>
            <p>Eyebrow tint</p>
            <p>Selections of tints available!</p>  
          </NavItem>

          <NavItem img={GelnailsPhoto} alt='gelnails photo' title='Gel nails'>
            <p>Full set gel nails</p>
            <p>Refill</p>
            {/* <p>Full set gel nails €25.00</p>
            <p>Refill €20.00</p> */}
          </NavItem>
        </ul>
      </nav>
    </>
  );
}

export default Navigation;