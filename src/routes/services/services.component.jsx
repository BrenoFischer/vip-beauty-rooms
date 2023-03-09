import Service from '../../components/service/service.component';

import PedicurePhoto from '../../assets/pedicure.jpg';
import MassagePhoto from '../../assets/massage.jpg';
import EyelashPhoto from '../../assets/eyelash.jpg';
import GelnailsPhoto from '../../assets/gel-nails.jpg';

import './services.styles.scss';

function Services() {
  const manicureDetailsText = ['Large selections of colours available', 'Three week manicure on feet or fingers', 'Sit back relax and enjoy some quality you time', '_', '_', 'Full Pedicure - 55 mins', 'Relax soak feet - foot rub / Remove hard skin on feet', 'Foot Massage + Polish - 3 week polish', 'Time Period 55/60 mins Price €39.00', '_', 'Mini Pedicure - €19.00 Time Period 25/30 mins', 'Relax - soak feet in foot spa', 'Mini foot massage and regular polish', '_', 'Monday to Wednesday 10am to 6pm', 'Thursday to Friday 10am to 8pm', 'Saturday 10am to 5pm'];
  const massageDetailsText = ['Large selections of Massage', 'Male/Female clients', 'Candle life room', 'Relaxation Music ', 'Full body / Half body massage', 'Relaxation Massage / Deep Tissue Massage / Indian Head Massage', '_', '60mins Massage €55.00', '45mins Massage €40.00', '30min Massage €30.00', '_', 'Monday to Wednesday 10am to 6pm', 'Thursday to Friday 10am to 8pm', 'Saturday 10am to 5pm'];
  const eyeDetailsText = ['Eye Lash lift - €40.00',  'Eye Lash extension full set - €35.00', 'Selections of tints available!', '_', 'Monday to Wednesday 10am to 6pm', 'Thursday to Friday 10am to 8pm', 'Saturday 10am to 5pm'];
  const gelDetailsText = ['Large selection of colours available', 'Refill gel or full set gel', 'Ring to book appointment', 'Walk Inn more than welcome', '_', 'Monday to Wednesday 10am to 6pm', 'Thursday to Friday 10am to 8pm', 'Saturday 10am to 5pm'];
  const spaDetialsText = ['1/2 Day Spa Package', 'Full day Spa Package', '_', '1/2 Day Spa - €79.00', 'Full Day Spa - €120.00', '_', '1/2 Day - Gel nails + mini pedicure + 20min massage', '2 hours 10 mins - Total: €79.00', '_', 'Full Day Spa Package - Time Period 3 hours 10 mins - Cost €120.00', 'Treatment full body massage, gel nails, full pedicure, facial or hair blow dry', '_', 'Monday to Wednesday 10am to 6pm', 'Thursday to Friday 10am to 8pm', 'Saturday 10am to 5pm']

  return (
    <> 
      <main className='services'>
        <h1 className='services__title'>Our Services</h1>
        <ul className='services__list'>
          <Service img={PedicurePhoto} alt='manicure' title='Manicure / Pedicure' details={manicureDetailsText}>
            <p>3 week manicure available!</p>
            <p>Full Pedicure</p>
            <p>Mini Pedicure</p>
          </Service>

          <Service img={MassagePhoto} alt='massage' title='Massage' details={massageDetailsText}>
            <p>Relaxation Massage</p>
            <p>Deep Tissue Massage</p>
            <p>Indian Head Massage</p>
          </Service>

          <Service img={EyelashPhoto} alt='eyelash' title='Eyelash / Eyebrow' details={eyeDetailsText}>
            <p>Eye Lash</p>
            <p>Eyebrow tint</p>
            <p>Selections of tints available!</p>  
          </Service>

          <Service img={GelnailsPhoto} alt='gelnails' title='Gel nails' details={gelDetailsText}>
            <p>Full set gel nails</p>
            <p>Refill</p>
          </Service>

          <Service img={PedicurePhoto} alt='spa package' title='Spa Package' details={spaDetialsText}>
            <p>1/2 Day Spa Package</p>
            <p>Full day Spa Package</p>
          </Service>
        </ul>
      </main>
    </>
  );
}

export default Services;
