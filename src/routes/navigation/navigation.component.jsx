import { useContext } from 'react';

import { Link, Outlet } from 'react-router-dom';
import logo from '../../assets/logo.png';

import { signOutUser } from '../../utils/firebase';

import { UserContext } from '../../context/user.context';

import './navigation.styles.scss';

const Navigation = () => {
    const { currentUser } = useContext(UserContext);

    return(
        <>
            <nav className='nav'>
                <div className='nav__img-container'>
                    <img className='nav__img' src={logo} alt="Logo" />
                </div>
                <div className='nav__links-container'>
                    <ul className='nav__links'>
                        <Link className='nav__link' to="/">Services</Link>
                        { currentUser ? (
                                <span className='nav__link' onClick={signOutUser}>Sign Out</span>
                            ) :
                            (
                                <Link className='nav__link' to="sign-in/">Sign In</Link>
                            )

                        }
                    </ul>
                </div>
            </nav>
            <Outlet />
        </>
    );
};

export default Navigation;