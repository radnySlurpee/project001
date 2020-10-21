import React from 'react';
import "./introduction.component.css";

import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import {ReactComponent as IntroductionRsvg} from '../../assets/introduction_R.svg';


const Introdution = () => {
    return (  
        <Row className="intro-container">
            <Col>
                <IntroductionRsvg/> 
                <br/>
                <div className="intro-text"> 
                    If at first you don’t succeed; <br/> call it version 1.0
                </div>
                </Col>
        </Row>
    )
}
 
export default Introdution;

