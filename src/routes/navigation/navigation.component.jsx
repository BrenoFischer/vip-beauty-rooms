import { useSelector } from 'react-redux';

import { Link, Outlet } from 'react-router-dom';
import logo from '../../assets/logo.png';

import { signOutUser } from '../../utils/firebase';

import './navigation.styles.scss';

const Navigation = () => {
    const currentUser = useSelector((state) => state.user.currentUser);

    return(
        <>
            <nav className='nav'>
                <div className='nav__img-container'>
                    <Link to='/'>
                        <img className='nav__img' src={logo} alt="Logo" />
                    </Link>
                </div>
                <div className='nav__links-container'>
                    <ul className='nav__links'>
                        <Link className='nav__link' to="posts/">Posts</Link>
                        <Link className='nav__link' to="services/">Services</Link>
                        { currentUser ? (
                                <>
                                    <Link className='nav__link' to="add-service/">Add Service</Link>
                                    <Link className='nav__link' to="edit-opening-hours/">Edit Opening Hours</Link>
                                    <span className='nav__link' onClick={signOutUser}>Sign Out</span>
                                </>
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