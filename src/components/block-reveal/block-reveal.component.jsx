import React from 'react';
import './block-reveal.styles.scss';

import { useInView } from 'react-intersection-observer';
import { motion } from "framer-motion"


const BlockReveal = ({color, Delay, children}) => {

    const [ref, inView] = useInView({
        threshold: 0.4,
        triggerOnce: true
      });
    
      const heroImageWrapperVariants = {
        visible: { height: "0%", },
        hidden: { height: "100%",}
      }

    return (   
        <motion.div
            initial={{height:"100%", width:"100%",}}
            style={{backgroundColor: color, position:'absolute', zIndex:60}}
            animate={inView ? 'visible' : 'hidden'}
            variants={heroImageWrapperVariants}
            ref={ref}
            transition={{ 
            delay: Delay,
            duration: 0.8, ease: [0.6, 0.05, -0.01, 0.9] }}> 
            
            {children}
        </motion.div>
    );
}
 
export default BlockReveal;