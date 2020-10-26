import React from 'react'
import "./introduction.styles.scss";

import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import GlowButton from '../glow-button/glow-button.component';


const Introdution = () => {

    return (  
        <Row className="intro-container">
            <Col className="intro-image" 
                 md={6}
                 sm={{ order: 'last' }}>

            </Col>
            <Col className="intro-content">
                <div className="intro-content-logo">
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
                

            </Col>
            
        </Row>
    )
}
 
export default Introdution;

