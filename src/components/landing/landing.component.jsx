import React from 'react'
import "./landing.styles.scss";

import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import TextReveal from '../../components/text-reveal/text-reveal.component';

import { motion } from "framer-motion"


const Landing = () => {

    return (  
        <Row className="landing-container" noGutters>
            <Col
                md={6}
                sm={{ order: 'first' }}>
                    
                <TextReveal Delay={1}>
                    <h2>
                        First, solve the problem. 
                    </h2>
                </TextReveal>

                <TextReveal Delay={2.5}>
                    <h2>
                        Then, write the code.
                    </h2>
                </TextReveal>
                    
            </Col>

            <Col className="landing-arrow">
                              
                <motion.div 
                    initial={{ rotate: 90, opacity:0 }}
                    animate={{ y: 10, opacity:1 }}
                    transition={{
                        delay:4,
                        ease: "easeOut",
                        duration: 0.5, ease: [0.65, 0, 0.35, 1],
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