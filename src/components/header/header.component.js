import VipCover from '../../assets/vip-cover-alt.png';

import './header.styles.scss';

function Header() {
  return (
    <div className='header__container'>
      <img className='header__image' src={VipCover} alt='Vip Cover' />
    </div>
  );
}

export default Header;


