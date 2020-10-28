import React from 'react';
import "./homepage.component.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import Container from 'react-bootstrap/Container';
//import Row from 'react-bootstrap/Row';

//components
import Hero from '../../components/hero/hero.component';
import Introduction from '../../components/introduction/introduction.component';
import Landing from '../../components/landing/landing.component';
//import Content from '../../components/content/content.component';
import WithObserver from '../../components/with-observer/with-observer.component';
//import DesignWorks from '../../components/design-works/design-works.component';

//const DesignWorksWithObserver = WithObserver(DesignWorks);

const HomePage = () => {

    return(
     <div className="homepage-container">
          <Container fluid>
            <Landing/>
            <Introduction/>
            { /*
        
                <Hero/>
            
            
              <Row>
                <div className="first-text-row">
                     I'M A GUY WITH A PASSION FOR TECHNOLOGY & INNOVATION
                </div>

              </Row>

              <DesignWorksWithObserver/>

              <ContentWithObserver/>
              <ContentWithObserver/>
          */ }
          </Container>

     </div>   
    )
};

export default HomePage;