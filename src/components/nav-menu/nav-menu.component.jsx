import React from 'react';
import './nav-menu.component.css';

const NavMenu = () => {

    const navTransistion = {
        top: '0%', //if top 0% then show menu
      };

    return(
        <div className="nav-menu" style={navTransistion}>
            <div className="nav-data">
               <ul>
                    <li>HOME</li>
                    <li>ABOUT</li>
               </ul>
            </div>
        </div>
    )
};

export default NavMenu;