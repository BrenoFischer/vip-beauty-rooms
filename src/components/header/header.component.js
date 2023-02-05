import UniqueCover from '../../assets/beauty-cover.png';

import './header.styles.scss';

function Header() {
  return (
    <div className='header__container'>
      <img className='header__image' src={UniqueCover} alt='Unique Cover' />
    </div>
  );
}

export default Header;


