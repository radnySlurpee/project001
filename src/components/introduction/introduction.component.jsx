import React from 'react'
import "./introduction.styles.scss";

import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import BlockReveal from '../block-reveal/block-reveal.component';
import GlowButton from '../glow-button/glow-button.component';


const Introdution = () => {

    return (  
        <Row className="intro-container" noGutters>
            <Col
                md={6}
                sm={{ order: 'last' }}>
                <BlockReveal color="rgb(158,255,65)"  Delay={1}/>
                <div className="intro-image">
                </div>
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

