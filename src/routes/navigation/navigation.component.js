import NavItem from '../../components/navItem/navItem.component';

import ManicurePhoto from '../../assets/manicure.jpg';
import PedicurePhoto from '../../assets/pedicure.jpg';
import MassagePhoto from '../../assets/massage.jpg';
import EyelashPhoto from '../../assets/eyelash.jpg';
import GelnailsPhoto from '../../assets/gel-nails.jpg';

import './navigation.styles.scss';

function Navigation() {
  const manicureDetailsText = ['Large selections of colours available', 'Three week manicure on feet or fingers', 'Sit back relax and enjoy some quality you time', '.', '.', 'Full Pedicure - 55 mins', 'Relax soak feet - foot rub / Remove hard skin on feet', 'Foot Massage + Polish - 3 week polish', 'Time Period 55/60 mins Price €39.00', ' .', 'Mini Pedicure - €19.00 Time Period 25/30 mins', 'Relax - soak feet in foot spa', 'Mini foot massage and regular polish', '.','(087) 750 8097 for appointment', 'Tuesday to Thursday 9am to 6pm', 'Friday 9am to 7pm', 'Saturday 9am to 5pm'];
  const massageDetailsText = ['Large selections of Massage', 'Male/Female clients', 'Candle life room', 'Relaxation Music ', 'Full body / Half body massage', 'Relaxation Massage / Deep Tissue Massage / Indian Head Massage', '.', '60mins Massage €55.00', '45mins Massage €40.00', '30min Massage €30.00', '(087) 750 8097 for appointment', 'Tuesday to Thursday 9am to 6pm', 'Friday 9am to 7pm', 'Saturday 9am to 5pm'];
  const eyeDetailsText = ['Eye Lash', 'Eyebrow tint', 'Selections of tints available!', '.', '(087) 750 8097 for appointment', 'Tuesday to Thursday 9am to 6pm', 'Friday 9am to 7pm', 'Saturday 9am to 5pm'];
  const gelDetailsText = ['Large selection of colours available', 'Refill gel or full set gel', 'Ring to book appointment', 'Walk Inn more than welcome', '.', '(087) 750 8097 for appointment', 'Tuesday to Thursday 9am to 6pm', 'Friday 9am to 7pm', 'Saturday 9am to 5pm'];
  const spaDetialsText = ['1/2 Day Spa Package', 'Full day Spa Package', '.', '1/2 Day Spa - €79.00', 'Full Day Spa - €120.00', '.', '1/2 Day - Gel nails + mini pedicure + 20min massage', '2 hours 10 mins - Total: €79.00', '.', 'Full Day Spa Package - Time Period 3 hours 10 mins - Cost €120.00', 'Treatment full body massage, gel nails, full pedicure, facial or hair blow dry', '.', '(087) 750 8097 for appointment', 'Tuesday to Thursday 9am to 6pm', 'Friday 9am to 7pm', 'Saturday 9am to 5pm']

  return (
    <> 
      <nav className='nav'>
        <h1 className='nav__title'>Our Services</h1>
        <ul className='nav__list'>
          <NavItem img={PedicurePhoto} alt='manicure' title='Manicure / Pedicure' details={manicureDetailsText}>
            <p>3 week manicure available!</p>
            <p>Full Pedicure</p>
            <p>Mini Pedicure</p>
          </NavItem>

          <NavItem img={MassagePhoto} alt='massage' title='Massage' details={massageDetailsText}>
            <p>Relaxation Massage</p>
            <p>Deep Tissue Massage</p>
            <p>Indian Head Massage</p>
          </NavItem>

          <NavItem img={EyelashPhoto} alt='eyelash' title='Eyelash / Eyebrow' details={eyeDetailsText}>
            <p>Eye Lash</p>
            <p>Eyebrow tint</p>
            <p>Selections of tints available!</p>  
          </NavItem>

          <NavItem img={GelnailsPhoto} alt='gelnails' title='Gel nails' details={gelDetailsText}>
            <p>Full set gel nails</p>
            <p>Refill</p>
          </NavItem>

          <NavItem img={PedicurePhoto} alt='spa package' title='Spa Package' details={spaDetialsText}>
            <p>1/2 Day Spa Package</p>
            <p>Full day Spa Package</p>
          </NavItem>
        </ul>
      </nav>
    </>
  );
}

export default Navigation;
