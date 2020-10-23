import React from 'react';
import "./introduction.component.css";

import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { motion } from "framer-motion";

import BaffleTextFilter from '../baffle-text-filter/baffle-text-filter';
import {ReactComponent as Logo} from '../../assets/introduction_R.svg';


const Introdution = () => {
    return (  
        <Row className="intro-container">
            <Col>
                <motion.div
                    className="intro-text"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0}}
                    transition={{
                        delay: 1,
                        duration: 0.3,
                        ease: "easeOut"}}> 

                    <BaffleTextFilter 
                    text={"TECHNOLOGY IS BEST WHEN IT BRINGS PEOPLE TOGETHER"} 
                    setDuration={2000}
                    speed={150} 
                    obfuscate={false}
                    type={"kanji"}/>

                </motion.div>
                <br/>
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0}}
                    transition={{
                        delay: 3,
                        duration: 0.3,
                        ease: "easeOut" }}>
                            <Logo/>
                </motion.div>
                <br/><br/>
                <motion.div 
                    className="arrow-down"
                    initial={{ opacity: 0, y: -40 }}
                    animate={{ opacity: 1, y: 0}}
                    transition={{
                        delay: 3,
                        repeat: 3,
                        duration: 0.5,
                        ease: "linear" }}>
                    <span>&#8595;</span>
                </motion.div>
                
            </Col>
        </Row>
    )
}
 
export default Introdution;

