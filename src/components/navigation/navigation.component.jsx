import React from 'react';
import {ReactComponent as Navlogo} from '../../assets/NAV.svg';
import {ReactComponent as NavlogoClose} from '../../assets/NAVclose.svg';
import './navigation.component.css';

import { connect } from 'react-redux';

import { toggleNavigationHidden } from '../../redux/navigation/navigation.actions';
import {selectNavigationHidden} from '../../redux/navigation/navigation.selectors';
import {ReactComponent as Logo} from '../../assets/introduction_R.svg';

import { motion } from "framer-motion";

const Navigation = ({ toggleNavigationHidden, hidden }) => {

    return(
        <div>
            <motion.div
                className="toggle-btn"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{  
                delay: 1,
                duration: 0.2,
                ease: "easeOut"
                }}
                onClick={toggleNavigationHidden}>
                    {hidden ? <Navlogo/> : <NavlogoClose/>}
            </motion.div>

            <motion.div
                className="logo-container"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.2}}
                whileTap={{ rotate: -360}}
                transition={{
                duration: 0.2,
                ease: "easeOut" }}>
                    <Logo width="51px"/>
            </motion.div>

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