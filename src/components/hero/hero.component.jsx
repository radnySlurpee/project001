import React from 'react';
import "./hero.component.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useInView } from 'react-intersection-observer';

import { motion } from "framer-motion"

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

import BaffleTextFilter from '../../components/baffle-text-filter/baffle-text-filter.jsx';
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
                <BaffleTextFilter 
                  text={"INFORMATION TECHNOLOGY"}
                  setDuration={3000} 
                  speed={150}
                  obfuscate={!inView}
                  type={"kanji"}/>
              </div>
            </motion.div>
          </Col>
          <Col> 
            <motion.div
              animate={inView ? 'visible' : 'hidden'}
              variants={heroImageWrapperVariants}
              ref={ref}
              transition={{  
                duration: 1,
                ease: "easeOut"
              }}>

              <div className="hero-header"> 
                <BaffleTextFilter 
                  text={"I'm Rad"}
                  setDuration={1000}  
                  speed={200}
                  obfuscate={!inView}
                  type={"kanji"}/>
              </div>

              <div className="hero-tilt-header">
              <BaffleTextFilter 
                  text={"HELLO"} 
                  setDuration={2000}  
                  speed={200}
                  obfuscate={!inView}
                  type={"tone"}/>
              </div>
            </motion.div>
              
          </Col>
        </Row>
    )

}


export default Hero;