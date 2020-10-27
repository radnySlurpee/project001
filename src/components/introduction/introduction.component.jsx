import React from 'react'
import "./introduction.styles.scss";

import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { motion } from "framer-motion"


import BlockReveal from '../block-reveal/block-reveal.component';
import GlowButton from '../glow-button/glow-button.component';


const Introdution = () => {

    return (  
        <Row className="intro-container" noGutters>
            <Col
                md={6}
                sm={{ order: 'last' }}>
                  <BlockReveal color="rgb(27,48,75)"  Delay={0.5}/>
                    <div className="intro-image">
                    </div>
            </Col>

            <Col className="intro-content">              
                <div className="intro-content-logo">
                <BlockReveal color="rgb(11,21,31)" Delay={1}/>
                    <GlowButton>
                        R
                    </GlowButton>
                    <GlowButton>
                        A
                    </GlowButton>
                   <br/>
                   <GlowButton>
                        D
                    </GlowButton>
                    <GlowButton>
                        S
                    </GlowButton>
                </div>

                <motion.div 
                    className="start-arrow"
                    initial={{rotate: 90 }}
                    animate={{y:10}}
                    transition={{
                        delay:3,
                        ease: "easeOut",
                        duration: 0.5,
                        repeat: Infinity,
                        repeatType: "reverse", 
                    }}>
                        <BlockReveal color="rgb(24,43,67)" Delay={3}/>
                        start<span> &#9654; </span>
                </motion.div>

            </Col>
            
        </Row>
    )
}
 
export default Introdution;

