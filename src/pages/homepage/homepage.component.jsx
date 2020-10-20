import React from 'react';
import "./homepage.component.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import { motion } from "framer-motion"

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

import BaffleTextFilter from '../../components/baffle-text-filter/baffle-text-filter.jsx';

import REDradimage from '../../assets/REDrad.jpg';
import RadPoster1image from '../../assets/radPoster1.jpg'
import {ReactComponent as IntroductionRsvg} from '../../assets/introduction_R.svg';


const HomePage = () => {

    return(
     <div className="Homepage">
          <Container>
            <Row className="Intro">
              <Col>
                <IntroductionRsvg/> 
                <br/>
                <div className="IntroText"> 
                   Look at Usual Things With Unusual Eyes
                </div>
              </Col>
            </Row>
            <Row className="Hero">
              <Col>
                <motion.div
                  className="HeroContainter"
                  initial={{ opacity:0 }}
                  animate={{ opacity:1 }}
                  transition={{ 
                    delay: 2,
                  }}>
                <motion.div
                  className="HeroImageWrapper"
                  initial={{ width: "100%", right: 0}}
                  animate={{ width: "0%", right: 0}}
                  transition={{ 
                    delay: 3,
                    damping: 15, 
                    mass: 0.27, 
                    stiffness: 55
                  }}> 
                  </motion.div>

                    <Image className="HeroImage" src={REDradimage} fluid />
              
                    <div className="HeroImageFooter">
                      ::::::::::: TERMINAL :::::::::
                      <BaffleTextFilter 
                        text={"0000000000000"} 
                        speed={150} 
                        obfuscate={true}
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

                    <div className="Bebasfont HeroHeader"> 
                      <BaffleTextFilter 
                        text={"RAD YR2020"} 
                        speed={100} 
                        obfuscate={false}
                        type={"kanji"}/>
                    </div>
                    <div className="Bebasfont HeroTiltHeader">
                      READING DATA:
                      <BaffleTextFilter 
                        text={"RAD RAD"} 
                        speed={300} 
                        obfuscate={true}
                        type={"tone"}/><br/>
                      <BaffleTextFilter 
                        text={"RAD RAD RAD RAD RAD "} 
                        speed={120} 
                        obfuscate={false}
                        type={"kanji"}/>
                    </div>
                    <div className="TiltFooter"> 
                      Hello World
                    </div>
                  </motion.div>
                    
                </Col>
              </Row>
              <Row className="autobiography-row">
                <Col> 
                    <motion.div
                      className="autobiography-row-text"
                      whileHover={{backgroundColor: "rgb(158,255,65)", skewY:-5, color:"black"}}
                      transition={{ 
                        damping: 15, 
                        mass: 0.27, 
                        stiffness: 55}}> 

                        <motion.div
                          initial={{opacity: 0, y: -2, skewY:2}}
                          animate={{opacity: 1, y: 0, skewY:0}}
                          transition={{  
                            delay: 4,
                            duration: 0.3,
                            ease: "linear"}}> 
                              INFORMATION TECH.
                          </motion.div>

                    </motion.div>
                </Col>
              </Row>

              <Row className="autobiography-row">
                <Col> 
                    <motion.div
                      className="autobiography-row-text"
                      whileHover={{backgroundColor: "rgb(255,255,255)", skewY:5, color:"black"}}
                      transition={{ 
                        damping: 15, 
                        mass: 0.27, 
                        stiffness: 55}}> 

                        <motion.div
                          initial={{opacity: 0, y: -2, skewY:2}}
                          animate={{opacity: 1, y: 0, skewY:0}}
                          transition={{  
                            delay: 4,
                            duration: 0.3,
                            ease: "linear"}}> 
                              JOSEPH RADNY ONGTAWCO
                          </motion.div>
                          
                    </motion.div>
                </Col>
              </Row>

              <Row>
                <div className="first-text-row">
                     IT | DEV
                </div>

              </Row>

              <Row>

               

                <div className="posterImage1">
                  <Image src={RadPoster1image} fluid />
                </div>
                
              </Row>
          </Container>

     </div>   
    )
};

export default HomePage;