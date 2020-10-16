import React from 'react';
import "./homepage.component.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import { motion } from "framer-motion"

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

import REDradimage from '../../assets/REDrad.jpg';


const HomePage = () => {

    return(
     <div className="Homepage">
          <Container>

              <Row className="Hero">
                <Col>
                  <motion.div
                    initial={{opacity: 0, x: -20}}
                    animate={{opacity: 1, x: 0}}
                    transition={{  
                      delay: 2,
                      duration: 1,
                      easeOut: "linear"
                    }}
                  >
                    <Image className="HeroImage" src={REDradimage} fluid />
                  </motion.div>
                </Col>
                <Col> 
                  <div className="Bebasfont HeroHeader"> RAD YR2020 </div>
                  <div className="Bebasfont HeroTiltHeader"> RAD RAD RAD RAD RAD RAD RAD <br/> RAD RAD RAD RAD RAD RAD RAD </div>
                </Col>
              </Row>
              <Row className="autobiography-row">
                <Col>
                  <b className="Bebasfont">BIO : 日工口 </b>
                  <br/>
                  <div className="autobiography-row-text"> NAME <br/> : JOSEPH RADNY ONGTAWCO </div>
                  <div className="autobiography-row-text"> BIRTH <br/> : JAN 28 1998 </div>
                  <div className="autobiography-row-text"> ACADEMICS <br/> : ACLC College </div>
                </Col>
              </Row>
          </Container>
     </div>   
    )
};

export default HomePage;