import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Welcome from './Welcome/Welcome';
import { modelInstance } from './data/WeatherModel'
import Jukebox from "./Jukebox/Jukebox";
import User from "./User/User";

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: 'Weather Jukebox',
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header container-fluid">
          {/* We rended diffrent component based on the path */}
          <Route exact path="/" component={Welcome}/>
          <Route path="/jukebox" render={() => <Jukebox model={modelInstance}/>}/>
          <Route exact path="/user" component={User}/>
        </header>
      </div>
    );
  }
}

export default App;
