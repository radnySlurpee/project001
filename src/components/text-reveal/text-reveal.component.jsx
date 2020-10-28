import React from 'react';
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';


const TextReveal = ({children, Delay}) => {

    const [ref, inView] = useInView({
        threshold: 0.4,
        triggerOnce: true
    });

    const variants = {
        hidden: { y: 72 ,skewY: -5, opacity: 0 },
        visible: { y: 0, skewY: 0,  opacity: 1 }
    };

    return ( 
        <motion.div
            initial={{y: 72 ,skewY: -5, opacity: 0}}
            animate={inView ? 'visible' : 'hidden'}
            variants={variants}
            transition={{
                delay: Delay,
                duration: 0.8, 
                ease: [0.6, 0.05, -0.01, 0.9] }}
            ref={ref}>
                {children}
        </motion.div>

     );
}
 
export default TextReveal;