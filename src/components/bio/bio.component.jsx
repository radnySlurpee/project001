import React from 'react';
import "./bio.component.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import { motion } from "framer-motion"

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Biography = () => {
    return ( 
        <Row className="biography-row">
            <Col> 
                <div className="biography-row-text"> 
                    <motion.div
                        whileHover={{ 
                            color: "rgb(19,19,19)", 
                            backgroundColor: "rgb(255,255,255)", 
                            skewY:3}}
                        transition={{ ease: [0.17, 0.67, 0.83, 0.67] }}> 

                            <a  className="resume-link-text" 
                                href="/resume"> 
                                    VIEW Résumé 
                            </a>
                    </motion.div>
                </div>
            </Col>
        </Row>
    )
}
 
export default Biography;