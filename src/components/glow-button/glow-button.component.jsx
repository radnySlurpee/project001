import React, { useState } from 'react'
import "./glow-button.styles.scss";
import { motion } from 'framer-motion';

const GlowButton = ({children}) => {

    const [ active, setActive ] = useState(false);

    const transition = {
        damping: 15, 
        mass: 0.27, 
        stiffness: 55,
        duration: 0.2,
    }

    const hoverGlow = {
        active: {
            color: "rgb(219,239,128)",
            textShadow: "2px 6px 50px #DBEF80",
        },
        inactive: {
            color: "rgb(255,255,255)",
            textShadow: "6px 6px 0px #161E31",
        }

    }
    
    return ( 
        <motion.button
            transition={transition}
            animate={active ? hoverGlow.active : hoverGlow.inactive}
            onClick={() => setActive(!active)}>
                {children} 
                {console.log(active)}
        </motion.button>
     );
}
 
export default GlowButton;