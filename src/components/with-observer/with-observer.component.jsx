import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const WithObserver = WrappedComponent => {
    
    const Observer = ({ ...otherProps }) => {

        const [ref, inView, entry] = useInView({
            threshold: 0.5,
            triggerOnce: true
        });
    
        console.log(entry);
    
        const variants = {
            visible: { opacity: 1},
            hidden: { opacity: 0 }
        };

        return (
            <motion.div
                animate={inView ? 'visible' : 'hidden'}
                variants={variants}
                transition={{ duration: 1, ease: 'easeOut' }}
                ref={ref}>
                    <WrappedComponent {...otherProps} />
            </motion.div>
        )
    }
    return Observer;
}

export default WithObserver;