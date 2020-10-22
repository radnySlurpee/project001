import React from 'react';
import './nav-bar.component.css';

import Navigation from '../navigation/navigation.component';
import NavMenu from '../nav-menu/nav-menu.component';

const NavBar = () => {
    return(
        <div className="nav-bar-container">
            <Navigation/>
            <NavMenu/>
        </div>
    )

}

export default NavBar;