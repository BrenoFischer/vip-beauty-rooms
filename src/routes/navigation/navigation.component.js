import { Outlet, Link } from 'react-router-dom';

import './navigation.styles.scss';

function Navigation() {
  return (
    <>
        <div className='nav-container'>
        <h1>Navigation</h1>
        </div>
        <Outlet />
    </>
  );
}

export default Navigation;
