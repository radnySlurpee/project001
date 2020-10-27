import React from 'react';
import './block-reveal.styles.scss';

import { useInView } from 'react-intersection-observer';
import { motion } from "framer-motion"


const BlockReveal = ({color, Delay}) => {

    const [ref, inView] = useInView({
        threshold: 0.5,
        triggerOnce: true
      });
    
      const heroImageWrapperVariants = {
        visible: { width: "0%", left: "100%"},
        hidden: { width: "100%", left: "0"}
      }

    return (   
        <motion.div
            initial={{height:"100%", width:"100%",}}
            style={{backgroundColor: color, position:'absolute'}}
            animate={inView ? 'visible' : 'hidden'}
            variants={heroImageWrapperVariants}
            ref={ref}
            transition={{ 
            delay: Delay,
            damping: 15, 
            mass: 0.27, 
            stiffness: 55
            }}> 
            
        </motion.div>
    );
}
 
export default BlockReveal;