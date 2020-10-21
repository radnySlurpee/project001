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
                  text={"IDENTITY"} 
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
                delay: 3,
                duration: 2,
                ease: "linear"
              }}>

              <div className="bebas-font hero-header"> 
                <BaffleTextFilter 
                  text={"RAD YR2020"} 
                  speed={100} 
                  obfuscate={false}
                  type={"kanji"}/>
              </div>
              <div className="bebas-font hero-tilt-header">
                    Konnichiwa | 

                    <BaffleTextFilter 
                    text={" Hello"} 
                    speed={300} 
                    obfuscate={false}
                    type={"tone"}/><br/>
                    <BaffleTextFilter 
                    text={"RAD RAD RAD RAD RAD "} 
                    speed={120} 
                    obfuscate={false}
                    type={"kanji"}/>

              </div>
              <div className="tilt-footer"> 
                Hello World
              </div>
            </motion.div>
              
          </Col>
        </Row>
    )

}


export default Hero;