import CustomButton from '../button/button.component';

import './navItem.styles.scss';

function NavItem({img, alt, title, children}) {
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
          <CustomButton buttonText="More details" />
        </div>
      </div>
      <div className='nav__item-image-container'>
        <img className='nav__item-image' src={img} alt={alt} />
      </div>
    </li>
  );
}

export default NavItem;
