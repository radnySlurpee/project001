import React from 'react';
import "./homepage.component.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';

//components
import Hero from '../../components/hero/hero.component';
import Introduction from '../../components/introduction/introduction.component';
import Biography from '../../components/bio/bio.component';
import Content from '../../components/content/content.component';

//assets
import RadPoster1image from '../../assets/radPoster1.jpg'


const HomePage = () => {

    return(
     <div className="homepage-container">
          <Container>

            <Introduction/>           
            <Hero/>
            <Biography/>
            
              <Row>
                <div className="first-text-row">
                     IT | DEV
                </div>

              </Row>
              <Row>
                <div className="posterImage1">
                    <Image src={RadPoster1image} fluid />
                </div>
              </Row>

              <Row>
                <div className="portfolio-text">
                    <p>Portfolio</p>
                </div>
              </Row>

              <Content/>
              <Content/>

          </Container>

     </div>   
    )
};

export default HomePage;