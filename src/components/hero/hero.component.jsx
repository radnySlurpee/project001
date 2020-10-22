import React from 'react';
import "./hero.component.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import { motion } from "framer-motion"

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

import BaffleTextFilter from '../../components/baffle-text-filter/baffle-text-filter.jsx';
import REDradimage from '../../assets/REDrad.jpg';

const Hero = () => {

    return(
        <Row className="hero">
        <Col>
          <motion.div
            className="hero-container"
            initial={{ opacity:0 }}
            animate={{ opacity:1 }}
            transition={{ 
              delay: 2,
            }}>
          <motion.div
            className="hero-image-wrapper"
            initial={{ width: "100%", right: 0}}
            animate={{ width: "0%", right: 0}}
            transition={{ 
              delay: 3,
              damping: 15, 
              mass: 0.27, 
              stiffness: 55
            }}> 
            </motion.div>

              <Image className="hero-image" src={REDradimage} fluid />
        
              <div className="hero-image-footer">
                <BaffleTextFilter 
                  text={"INFORMATION TECHNOLOGY"} 
                  speed={150} 
                  obfuscate={false}
                  type={"kanji"}/>
              </div>
            </motion.div>
          </Col>
          <Col> 
            <motion.div
               initial={{opacity: 0}}
               animate={{opacity: 1}}
              transition={{  
                delay: 4,
                duration: 1,
                ease: "easeOut"
              }}>

              <div className="hero-header"> 
                <BaffleTextFilter 
                  text={"I'm Rad"} 
                  speed={200} 
                  obfuscate={false}
                  type={"kanji"}/>
              </div>

              <div className="hero-tilt-header">
              <BaffleTextFilter 
                  text={"HELLO"} 
                  speed={200} 
                  obfuscate={false}
                  type={"tone"}/>
              </div>
            </motion.div>
              
          </Col>
        </Row>
    )

}


export default Hero;