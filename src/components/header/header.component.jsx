import React from 'react';
import "./header.styles.scss";
import {ReactComponent as Logo} from '../../assets/images/radsLogoWhite.svg';

const Header = () => {
    return ( 
        <div className="header">
            <Logo className="header-logo" />
        </div>
     );
}
 
export default Header;