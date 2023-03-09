import { Link, Outlet } from 'react-router-dom';
import logo from '../../assets/logo.png';

import './navigation.styles.scss';

const Navigation = () => {
    return(
        <>
            <nav className='nav'>
                <div className='nav__img-container'>
                    <img className='nav__img' src={logo} alt="Logo" />
                </div>
                <div className='nav__links-container'>
                    <ul className='nav__links'>
                        <Link className='nav__link' to="/">Services</Link>
                        <Link className='nav__link' to="sign-in/">Sign In</Link>
                    </ul>
                </div>
            </nav>
            <Outlet />
        </>
    );
};

export default Navigation;