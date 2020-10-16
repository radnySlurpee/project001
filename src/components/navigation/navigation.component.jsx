import React from 'react';
import {ReactComponent as Navlogo} from '../../assets/NAV.svg';
import {ReactComponent as NavlogoClose} from '../../assets/NAVclose.svg';
import './navigation.component.css';

import { connect } from 'react-redux';

import { toggleNavigationHidden } from '../../redux/navigation/navigation.actions';
import {selectNavigationHidden} from '../../redux/navigation/navigation.selectors';

import { motion } from "framer-motion";

const Navigation = ({ toggleNavigationHidden, hidden }) => {

    return(
        <motion.div
            className="toggle-btn"
            initial={{opacity: 0, x: 50}}
            animate={{opacity: 1, x: 0}}
            transition={{  
            delay: 1,
            duration: 0.2,
            ease: "linear"
            }}
            onClick={toggleNavigationHidden}>
                {hidden ? <Navlogo/> : <NavlogoClose/>}
        </motion.div>
    )
}

const mapStateToProps = (state) => ({
    hidden: selectNavigationHidden(state)
})

const mapDispatchToProps = dispatch => ({
    toggleNavigationHidden: () => dispatch(toggleNavigationHidden())
});

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);