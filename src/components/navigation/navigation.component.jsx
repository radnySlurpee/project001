import React from 'react';
import {ReactComponent as Navlogo} from '../../assets/NAV.svg';
import {ReactComponent as NavlogoClose} from '../../assets/NAVclose.svg';
import './navigation.component.css';

import { connect } from 'react-redux';

import { toggleNavigationHidden } from '../../redux/navigation/navigation.actions';
import {selectNavigationHidden} from '../../redux/navigation/navigation.selectors';

const Navigation = ({ toggleNavigationHidden, hidden }) => {

    return(
        <div className="toggle-btn" 
             onClick={toggleNavigationHidden}>
                {hidden ? <Navlogo/> : <NavlogoClose/>}
        </div>
    )
}

const mapStateToProps = (state) => ({
    hidden: selectNavigationHidden(state)
})

const mapDispatchToProps = dispatch => ({
    toggleNavigationHidden: () => dispatch(toggleNavigationHidden())
});

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);