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


const HomePage = () => {

    return(
     <div className="Homepage">
          <Container>

              <Row className="Hero">
                <Col>
                  <motion.div
                    initial={{opacity: 0, x: -20}}
                    animate={{opacity: 1, x: 0}}
                    transition={{  
                      delay: 3,
                      duration: 0.5,
                      ease: "linear"
                    }}
                  >
                    <Image className="HeroImage" src={REDradimage} fluid />
                     
                    <div className="HeroImageFooter">
                      ::::::::::: TERMINAL :::::::::
                      <BaffleTextFilter 
                        text={"0000000000000"} 
                        speed={150} 
                        obfuscate={true}
                        isKanji={true}/>
                    </div>
                  </motion.div>
                </Col>
                <Col> 
                <motion.div
                     initial={{opacity: 0}}
                     animate={{opacity: 1}}
                    transition={{  
                      delay: 1,
                      duration: 2,
                      ease: "linear"
                    }}
                  >
                    <div className="Bebasfont HeroHeader"> 
                      <BaffleTextFilter 
                        text={"RAD YR2020"} 
                        speed={100} 
                        obfuscate={false}
                        isKanji={true}/>
                    </div>
                    <div className="Bebasfont HeroTiltHeader">
                      ENCRYPTION KEYS:
                      <BaffleTextFilter 
                        text={"RAD RAD"} 
                        speed={300} 
                        obfuscate={true}/><br/>
                      <BaffleTextFilter 
                        text={"RAD RAD RAD RAD RAD RAD RAD "} 
                        speed={120} 
                        obfuscate={false}
                        isKanji={true}/>
                    </div>
                    <div className="TiltFooter"> 
                      Hello 
                      <BaffleTextFilter 
                        text={"World"} 
                        speed={200} 
                        obfuscate={true}
                        isKanji={false}/>
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
                      delay: 5,
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
              <motion.footer
                className="footer-padding"
                initial={{opacity: 0, y: -2, skewY:1}}
                animate={{opacity: 1, y: 0, skewY:0}}
                transition={{  
                  delay: 6,
                  duration: 0.3,
                  ease: "linear"
                }}>
                  Made with React 
              </motion.footer>
          </Container>

     </div>   
    )
};

export default HomePage;