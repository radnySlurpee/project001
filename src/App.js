import React from 'react';


import { Switch, Route } from 'react-router-dom';
import Homepage from './pages/homepage/homepage.component';
import Aboutpage from './pages/aboutpage/aboutpage.component';
import Navigation from './components/navigation/navigation.component';
import NavMenu from './components/nav-menu/nav-menu.component';

import './App.css';

class App extends React.Component{

  render(){
    return (
      <div className="App">
        <Navigation/>
        <NavMenu/>
        
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/about' component={Aboutpage} /> 
        </Switch>
      </div>
    );
  }
}

export default App;
