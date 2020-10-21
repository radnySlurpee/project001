import React from 'react';
import "./homepage.component.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import { motion } from "framer-motion"

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

//components
import Hero from '../../components/hero/hero.component';

//assets
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

            <Hero/>
            
              <Row className="autobiography-row">
                <Col> 
                    <motion.div
                      className="autobiography-row-text"
                      whileHover={{backgroundColor: "rgb(158,255,65)", skewY:-7, color: "rgb(0,0,0)"}}
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
                              radnyongtawco123@gmail.com
                          </motion.div>

                    </motion.div>
                </Col>
              </Row>

              <Row className="autobiography-row">
                <Col> 
                    <motion.div
                      className="autobiography-row-text"
                      transition={{ 
                        damping: 15, 
                        mass: 0.27, 
                        stiffness: 55}}> 

                        <motion.div
                          initial={{opacity: 0, y: -2, skewY:0, }}
                          animate={{opacity: 1, y: 0, backgroundColor: "rgb(255,255,255)", skewY:7, color: "rgb(0,0,0)"}}
                          transition={{  
                            delay: 4,
                            duration: 0.3,
                            ease: "linear"}}> 
                              JOSEPH RADNY Y.0.
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