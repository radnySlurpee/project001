import React from 'react';
import './nav-menu.component.css';

import { motion } from "framer-motion"
import NavMenuItem from "../nav-menu/nav-menu-item.component";

import { connect } from 'react-redux';
import { selectNavigationHidden } from '../../redux/navigation/navigation.selectors';

const NavMenu = (hidden) => {

    const items = ["HOME", "ABOUT"];

    const variants = {
        open: { top: '0%' },
        closed: { top: '-100%' },
    }

    return(
        <motion.div 
            className="nav-menu"
            animate={!hidden.hidden ? "open" : "closed"}
            initial={{top: '-100%'}}
            variants={variants}
            transition={{  
                type: "spring",
                stiffness: 400,
                damping: 40 
            }}>

            <div className="nav-data">
               <ul>
                    {items.map((item, index) => (
                        <NavMenuItem item={item} key={index} />
                    ))}
               </ul>
            </div>
        </motion.div>
    )
};

const mapStateToProps = (state) => ({
    hidden: selectNavigationHidden(state)
})

export default connect(mapStateToProps)(NavMenu);
