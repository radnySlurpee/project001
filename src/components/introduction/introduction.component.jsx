import React from 'react'
import "./introduction.styles.scss";

import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import BlockReveal from '../block-reveal/block-reveal.component';

const Introdution = () => {

    return (  
        <Row className="intro-container" noGutters>
            <Col
                md={6}
                sm={{ order: 'last' }}>
                <BlockReveal color="rgb(158,255,65)" Delay={0.6}/>
                <div className="intro-image">
                </div>
            </Col>

            <Col className="intro-content">
            <BlockReveal color="rgb(9,8,14)" Delay={0.8}>
            </BlockReveal>
               <div className="intro-context-text">
                    <h1>JOSEPH RADNY</h1>
                    <br/>
                    <p>
                        The Man behind the black suit
                    </p>
               </div>
                
               
            </Col>
            
        </Row>
    )
}
 
export default Introdution;

