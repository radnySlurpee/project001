import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const WithObserver = WrappedComponent => {
    
    const Observer = ({ ...otherProps }) => {
        //const [ref, inView, entry]
        const [ref, inView] = useInView({
            threshold: 0.5,
            triggerOnce: true
        });
    
        //console.log(entry);
    
        const variants = {
            visible: { opacity: 1 },
            hidden: { opacity: 0 }
        };

        return (
            <motion.div
                animate={ inView ? 'visible' : 'hidden' }
                variants={ variants }
                transition={{ duration: 0.3, ease: [0.6, 0.05, -0.01, 0.9] }}
                ref={ ref }>
                    <WrappedComponent {...otherProps} />
            </motion.div>
        )
    }
    return Observer;
}

export default WithObserver;