import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Welcome from './Welcome/Welcome';
import { modelInstance } from './data/WeatherModel'
import Jukebox from "./Jukebox/Jukebox";
import User_main from "./User_main/User_main";
import User_all from "./User_all/User_all";
import User_jukebox from "./User_jukebox/User_jukebox";
import User_login from "./User_login/User_login";
import User_signup from "./User_signup/User_signup";
import User_forgot from "./User_forgot/User_forgot";
import withAuthentication from "./withAuthentication";
import About from "./About/About";

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: 'Weather Jukebox',
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header container-fluid">
          {/* We rended diffrent component based on the path */}
          <Route exact path="/" component={Welcome}/>
          <Route path="/jukebox" render={() => <Jukebox model={modelInstance}/>} />
          <Route exact path="/user_main" component={User_main}/>
          <Route exact path="/user_all" component={User_all}/>
          <Route exact path="/user_jukebox" component={User_jukebox}/>
          <Route exact path="/user_login" component={User_login}/>
          <Route exact path="/user_signup" component={User_signup}/>
          <Route exact path="/user_forgot" component={User_forgot} />
          <Route exact path="/about" component={About} />
        </header>
      </div>
    );
  }
}

export default withAuthentication(App);
