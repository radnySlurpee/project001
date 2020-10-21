import React from 'react';

import { Switch, Route } from 'react-router-dom';
import Homepage from './pages/homepage/homepage.component';
import Aboutpage from './pages/aboutpage/aboutpage.component';
import NavBar from './components/nav-bar/nav-bar.component';
import SmoothScroll from "./components/smoothScroll/smoothScroll.component";


import './App.css';

class App extends React.Component{

  render(){
    return (
      <div className="App">
          <NavBar/>

          <SmoothScroll>
            <Switch>
              <Route path='/' component={Homepage} />
              <Route exact path='/about' component={Aboutpage} /> 
            </Switch>
          </SmoothScroll>
      </div>
    );
  }
}

export default App;
