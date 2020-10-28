import React from 'react';
import { motion } from "framer-motion";

const WithBounce = ({children, ...otherProps}) => {
    return ( 

        <motion.div 
            initial={{ rotate: 90, opacity: 0 }}
            animate={{ y: 10, opacity:1 }}
            transition={{
                delay:4,
                ease: "easeOut",
                duration: 0.5, ease: [0.65, 0, 0.35, 1],
                repeat: Infinity,
                repeatType: "reverse", 
            }}>
                {children}
        </motion.div>

     );
}
 
export default WithBounce;