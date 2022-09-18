import { Link } from 'react-router-dom';
import CustomButton from '../button/button.component';

import './navItem.styles.scss';

function NavItem({img, alt, title, children, details}) {
  const detailsState = {
    service: title,
    img: img,
    details: details,
  };

  console.log()

  return (
    <li className='nav__item'>
      <div className='nav__item-left-container'>
        <div className='nav__item-text-container'>
          <div className='nav__item-title-container'>
            <h3 className='nav__item-title'>{title}</h3>
          </div>
          <div className='nav__item-details'>
            {children}
          </div>
        </div>
        <div className='nav__item-button-container'>
          <Link to='details' state={detailsState}>
            <CustomButton buttonText="More details" />
          </Link>
        </div>
      </div>
      <Link to='details' state={detailsState}>
        <div className='nav__item-image-container'>
          <img className='nav__item-image' src={img} alt={alt} />
        </div>
      </Link>
    </li>
  );
}

export default NavItem;
