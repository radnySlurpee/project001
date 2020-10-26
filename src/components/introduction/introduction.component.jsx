import React from 'react';
import "./introduction.styles.scss";

import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import {ReactComponent as Logo} from '../../assets/images/radsLogoWhite.svg';
//import { motion } from "framer-motion";

//import BaffleTextFilter from '../baffle-text-filter/baffle-text-filter';


const Introdution = () => {
    return (  
        <Row className="intro-container">
            <Col className="intro-content">
                <div className="header">
                    <Logo width="60" height="60"/>
                </div>

                <div className="intro-content-logo">
                   <h2> RA <br/> DS </h2>
                </div>

            </Col>
            <Col className="intro-image"></Col>
        </Row>
    )
}
 
export default Introdution;

