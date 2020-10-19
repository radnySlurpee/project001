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
                  Imagination is more important than knowledge. 
                  <br/>
                  For knowledge is limited, 
                  <br/>
                  whereas imagination embraces the entire world, 
                  <br/>
                  stimulating progress, 
                  giving birth to evolution.
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
                      RENDERING MEMORY:
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
                      Hello 
                      <BaffleTextFilter 
                        text={"World"} 
                        speed={200} 
                        obfuscate={true}/>
                    </div>
                  </motion.div>
                    
                </Col>
              </Row>
              <Row className="autobiography-row">
                <Col> 
                  <motion.div
                    initial={{opacity: 0, y: -2, skewY:1}}
                    animate={{opacity: 1, y: 0, skewY:0}}
                    transition={{  
                      delay: 4,
                      duration: 0.3,
                      ease: "linear"
                    }}
                  >
                    <b className="Bebasfont"> BIO : </b>
                    <br/>
                    <div className="autobiography-row-text"> NAME <br/> : JOSEPH RADNY ONGTAWCO </div>
                    <div className="autobiography-row-text"> BIRTH <br/> : JAN 28 1998 </div>
                    <div className="autobiography-row-text"> ACADEMICS <br/> : ACLC College </div>
                  </motion.div>
                </Col>
              </Row>
          </Container>

     </div>   
    )
};

export default HomePage;