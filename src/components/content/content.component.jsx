import React from 'react';
import "./content.component.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

import DuoTomeImage from '../../assets/images/rad-poster-duotone.jpg'
import logoDuoTone from '../../assets/images/logo-icon-duotone-rad.png'


const Content = () => {
    return ( 
        <Row className="content-container">    
            <Col>
                <h2 className="content-header"> DUOTONE </h2>
                <img className="content-logo" src={logoDuoTone} alt="duo"/>
                <br/> <br/>
                <p>
                    Practicing mixs of creations that are made up of two 
                    contrasting colors. Much like what it describes, 
                    the word “duotone” has two parts: “duo” 
                    meaning double and “tone” meaning color. 
                </p>

            </Col>
            <Col>
            
            <div className="image-content">
                <Image src={DuoTomeImage} fluid />
            </div>
            </Col>
      </Row>
     );
}
 
export default Content;

