import React from 'react';

import logo from '../../logo.svg';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


const HomePage = () => {

    return(
     <div className="Homepage">
         <img src={logo} alt="logo" />
          <p>
            Edit <code>src/App.js</code>radny
          </p>
          <a
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
              <Container>
                <Row>
                  <Col>1 of 2</Col>
                  <Col>2 of 2</Col>
                </Row>
                <Row>
                  <Col>1 of 3</Col>
                  <Col>2 of 3</Col>
                  <Col>3 of 3</Col>
                </Row>
              </Container>
          <Button variant="success"> click </Button>
     </div>   
    )
};

export default HomePage;