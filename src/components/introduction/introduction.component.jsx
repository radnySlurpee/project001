import React from 'react'
import "./introduction.styles.scss";

import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import BlockReveal from '../block-reveal/block-reveal.component';
import WithBounce from '../../components/with-bounce/with-bounce.component';
import TextReveal from '../../components/text-reveal/text-reveal.component';

const Introduction = () => {

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

                    <WithBounce>
                        <div className="bouncing-icon">
                            who am I <span> &#9660; </span>
                        </div>
                    </WithBounce>

                    <TextReveal Delay={1.2}>
                        <br/>
                        <h1>JOSEPH RADNY</h1>
                        <br/>
                    </TextReveal>
                    <TextReveal Delay={1.5}>
                        <p>
                        The Man behind the black suit.
                        </p>
                    </TextReveal>
                    <TextReveal Delay={1.8}>
                        <p>
                        Greetings, I'm a guy with a passion for 
                        technology and innovation.
                        </p>
                        <p>
                        I used React JS combined with Redux for state management, SASS for CSS preprocessor and other 
                        things, enough to make it elegant on doing Web development.
                        </p>

                        <p>
                        Together with graphic designs using photoshop and illustrator.
                        And with good experienced in Arduino Robotics using C++, I used that for my thesis back in college,
                        the project was called vendofy.
                        </p>

                        <p>
                        How can I help you?
                        </p>
                    </TextReveal>
               </div>
            </Col>
        </Row>
    )
}
 
export default Introduction;

