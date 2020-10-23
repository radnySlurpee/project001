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
                delay: 2,
                duration: 0.2,
                ease: "easeOut"
                }}
                onClick={toggleNavigationHidden}>
                    {hidden ? <Navlogo/> : <NavlogoClose/>}
            </motion.div>

            <motion.div
                className="logo-container"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}>

                    <motion.div 
                        className="logo-tag"
                        whileHover={{ backgroundColor: 'rgba(158,255,65,0.0)'}}
                        whileTap={{ scale: 3, x: 50, backgroundColor: 'rgba(158,255,65,0.0)'}}
                        transition={{
                            duration: 0.2,
                            ease: "easeOut" }}>

                        <Logo width="51px"/>
                    </motion.div>
                    
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