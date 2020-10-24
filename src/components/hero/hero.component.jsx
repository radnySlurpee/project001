import React from 'react';
import "./hero.component.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useInView } from 'react-intersection-observer';

import { motion } from "framer-motion"

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

import REDradimage from '../../assets/REDrad.jpg';

const Hero = () => {

  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: true
  });

  
  const variants = {
    visible: { opacity: 1},
    hidden: { opacity: 0 }
  };

  const heroImageWrapperVariants = {
    visible: { width: "0%", right: 0 },
    hidden: { width: "100%", right: 0}
  }

    return(
        <Row className="hero">
        <Col>
          <motion.div
            className="hero-container"
            animate={inView ? 'visible' : 'hidden'}
            variants={variants}
            ref={ref}
            transition={{ duration: 1, ease: 'easeOut' }}>
              
          <motion.div
            className="hero-image-wrapper"
            animate={inView ? 'visible' : 'hidden'}
            variants={heroImageWrapperVariants}
            ref={ref}
            transition={{ 
              delay: 1,
              damping: 15, 
              mass: 0.27, 
              stiffness: 55
            }}> 
            </motion.div>

              <Image className="hero-image" src={REDradimage} fluid />
        
              <div className="hero-image-footer">
                INFORMATION TECHNOLOGY
              </div>

            </motion.div>
          </Col>
          <Col> 
            <motion.div
              animate={inView ? 'visible' : 'hidden'}
              variants={variants}
              ref={ref}
              transition={{
                delay:2,
                damping: 15, 
                mass: 0.27, 
                stiffness: 55
              }}>

              <div className="hero-header"> 
                  I'm Rad
              </div>
            </motion.div>

            <motion.div
              animate={inView ? 'visible' : 'hidden'}
              variants={variants}
              ref={ref}
              transition={{
                delay: 3,
                damping: 15, 
                mass: 0.27, 
                stiffness: 55
              }}>

              <div className="hero-tilt-header">
                HELLO
              </div>
            </motion.div>
              
          </Col>
        </Row>
    )

}


export default Hero;