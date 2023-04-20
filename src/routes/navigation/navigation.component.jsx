import { useState } from 'react';

import { useSelector } from 'react-redux';

import { Link, Outlet } from 'react-router-dom';
import logo from '../../assets/logo.png';

import { signOutUser } from '../../utils/firebase';

import './navigation.styles.scss';

const Navigation = () => {
    const currentUser = useSelector((state) => state.user.currentUser);

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }

    const LinksList = ({phoneLink=""}) => {
        return(
            <ul className='nav__links'>
                <Link className={`nav__link ${phoneLink}`} onClick={() => { phoneLink && toggleMenu() }} to="posts/">Posts</Link>
                <Link className={`nav__link ${phoneLink}`} onClick={() => { phoneLink && toggleMenu() }} to="services/">Services</Link>
                { currentUser ? (
                        <>
                            <Link className={`nav__link ${phoneLink}`} onClick={() => { phoneLink && toggleMenu() }} to="add-post/">Add Post</Link>
                            <Link className={`nav__link ${phoneLink}`} onClick={() => { phoneLink && toggleMenu() }} to="add-service/">Add Service</Link>
                            <Link className={`nav__link ${phoneLink}`} onClick={() => { phoneLink && toggleMenu() }} to="edit-opening-hours/">Edit Opening Hours</Link>
                            <span className={`nav__link ${phoneLink}`} onClick={signOutUser}>Sign Out</span>
                        </>
                    ) :
                    (
                        
                        <Link className={`nav__link ${phoneLink}`} to="sign-in/">Sign In</Link>
                    )

                }
            </ul>
        )
    }

    return(
        <>
            <nav className='nav'>
                <div className='nav__img-container'>
                    <Link to='/'>
                        <img className='nav__img' src={logo} alt="Logo" />
                    </Link>
                </div>
                <div className='nav__links-container'>
                    <div className='nav__links--desktop'>
                        <LinksList />
                    </div>
                    <div className='nav__burger-menu' onClick={toggleMenu}>
                        {menuOpen ?
                            (<>
                                <span className='close-bar'></span>
                                <span className='close-bar-bottom'></span>
                            </>)
                        :
                            (<>
                                <span className='bar'></span>
                                <span className='bar'></span>
                                <span className='bar'></span>    
                            </>)
                        }
                    </div>
                </div>
                {menuOpen ?
                    (<div className='nav__menu-open'>
                        <ul className='nav__links-container--phone'>
                            <LinksList phoneLink='nav__phone-link' />
                        </ul> 
                        </div>)
                    :
                        (<></>)
                }
            </nav>
            <Outlet />
        </>
    );
};

export default Navigation;