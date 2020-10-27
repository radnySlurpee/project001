import React from 'react'
import "./landing.styles.scss";

import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { motion } from "framer-motion"


const Landing = () => {

    return (  
        <Row className="landing-container" noGutters>
            <Col
                md={6}
                sm={{ order: 'first' }}>
                    
                    <motion.div
                        initial={{skewY: -5, opacity: 0}}
                        animate={{skewY: 0,  opacity: 1}}
                        transition={{
                            delay:1,
                            ease: "easeOut",
                            duration: 0.5,
                        }}>
                            <h2>
                                First, solve the problem. 
                            </h2>
                    </motion.div>

                    <motion.div
                        initial={{skewY: -5, opacity: 0}}
                        animate={{skewY: 0,  opacity: 1}}
                        transition={{
                            delay:2,
                            ease: "easeOut",
                            duration: 0.5,
                        }}>
                            <h2>
                                Then, write the code. 
                            </h2>
                    </motion.div>
                    
            </Col>

            <Col className="landing-arrow">
                              
                <motion.div 
                    initial={{rotate: 90, opacity:0 }}
                    animate={{y:10,  opacity:1}}
                    transition={{
                        delay:3,
                        ease: "easeOut",
                        duration: 0.5,
                        repeat: Infinity,
                        repeatType: "reverse", 
                    }}>
                        start <span> &#9654; </span>
                </motion.div>

            </Col>
            
        </Row>
    )
}
 
export default Landing;