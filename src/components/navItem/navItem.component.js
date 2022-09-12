import './navItem.styles.scss';

function NavItem({img, alt, title, children}) {
  return (
        <li className='nav__item'>
            <div className='nav__item-title-container'>
                <h3 className='nav__item-title'>{title}</h3>
            </div>
            <div className='nav__item-content-container'>
              <img className='nav__item-image' src={img} alt={alt} />
              <div className='nav__item-details'>
                {children}
              </div>
            </div>
        </li>
  );
}

export default NavItem;
