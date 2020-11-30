import React from 'react'
import "./landing.styles.scss";

import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import TextReveal from '../../components/text-reveal/text-reveal.component';
import WithBounce from '../../components/with-bounce/with-bounce.component';


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
                        Then, do the magic.
                    </h2>
                </TextReveal>
            </Col>

            <Col className="landing-arrow">
                <WithBounce>
                    start <span> &#9654; </span>
                </WithBounce>
            </Col>
            
        </Row>
    )
}
 
export default Landing;