import React from 'react';
import {ReactComponent as Navlogo} from '../../assets/NAV.svg';
import './navigation.component.css';

const Navigation = () => {

    return(
        <div className="toggle-btn">
             <Navlogo/>
        </div>
    )
}

export default Navigation;