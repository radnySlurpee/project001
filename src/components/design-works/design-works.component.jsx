import React from 'react';
import "./design-works.component.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

import { motion } from "framer-motion";

//assets
import FloatingCityImage from '../../assets/images/floating-city.jpg';
import GoldfishImage from '../../assets/images/goldfish-ratio.jpg';
import WaterCreatureImage from '../../assets/images/water-creature.jpg';
import BigNotationImage from '../../assets/images/big-notation.jpg';
import DuoToneImage from '../../assets/images/rad-poster-duotone.jpg';
import RadStayImage from '../../assets/images/rad-stay-home.jpg';


const DesignWorks = () => {

    return ( 
        <div>
            <Row>
                <h2> DESIGNS </h2>
                <br/>
            </Row>
            <Row>
                <Col className="image-box">
                    <motion.div
                        initial={{ y: -15 }}
                        animate={{ y: 15}}
                        transition={{
                            repeat: Infinity,
                            repeatType: "reverse",
                            duration: 3,
                            ease: "linear"}}> 
                                <Image src={FloatingCityImage} fluid />
                    </motion.div>
                    
                </Col>
                <Col className="image-box">
                    <motion.div
                        initial={{ y: 20 }}
                        animate={{ y: 0}}
                        transition={{
                            repeat: Infinity,
                            repeatType: "reverse",
                            duration: 5,
                            ease: "linear"}}>
                                <Image src={GoldfishImage} fluid />
                    </motion.div>
                </Col>

                <Col className="image-box">
                <motion.div
                        initial={{ y: -13 }}
                        animate={{ y: 17}}
                        transition={{
                            repeat: Infinity,
                            repeatType: "reverse",
                            duration: 4,
                            ease: "linear"}}>
                                <Image src={WaterCreatureImage} fluid />
                    </motion.div>
                </Col>
            </Row>

            <Row className="row2-container">
                <Col className="image-box">
                    <motion.div
                        initial={{ y: 25 }}
                        animate={{ y: -15}}
                        transition={{
                            repeat: Infinity,
                            repeatType: "reverse",
                            duration: 4,
                            ease: "linear"}}> 
                                <Image src={RadStayImage} fluid />
                    </motion.div>
                    
                </Col>
                <Col className="image-box">
                    <motion.div
                        initial={{ y: 10 }}
                        animate={{ y: -15}}
                        transition={{
                            repeat: Infinity,
                            repeatType: "reverse",
                            duration: 3,
                            ease: "linear"}}>
                                <Image src={BigNotationImage} fluid />
                    </motion.div>
                </Col>

                <Col className="image-box">
                <motion.div
                        initial={{ y: 13 }}
                        animate={{ y: -17}}
                        transition={{
                            repeat: Infinity,
                            repeatType: "reverse",
                            duration: 5,
                            ease: "linear"}}>
                                <Image src={DuoToneImage} fluid />
                    </motion.div>
                </Col>
            </Row>

      </div>
     );
}
 
export default DesignWorks;