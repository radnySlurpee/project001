import React from 'react';


import { Switch, Route } from 'react-router-dom';
import Homepage from './pages/homepage/homepage.component';
import Aboutpage from './pages/aboutpage/aboutpage.component';

import './App.css';

class App extends React.Component{

  render(){
    return (
      <div className="App">
        <Switch>
                  <Route exact path='/' component={Homepage} />
                  <Route path='/about' component={Aboutpage} /> 
        </Switch>
      </div>
    );
  }
}

export default App;
