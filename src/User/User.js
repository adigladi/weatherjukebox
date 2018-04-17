import React, { Component } from 'react';
import './User.css';
import { modelInstance } from './data/WeatherModel'
class User extends Component {

  constructor(props) {
    super(props)
    
    // we put on state the properties we want to use and modify in the component
    this.state = {
    }
  }

  // this methods is called by React lifecycle when the 
  // component is actually shown to the user (mounted to DOM)
  // that's a good place to setup model observer
  componentDidMount() {
    modelInstance.addObserver(this)
  }

  // this is called when component is removed from the DOM
  // good place to remove observer
  componentWillUnmount() {
    modelInstance.removeObserver(this)
  }

  // in our update function we modify the state which will
  // cause the component to re-render
  update() {
    this.setState({
    })
  }

  render() {
    return (
      <div className="User">
        <p>
        Hej
        </p>
      </div>
    );
  }
}

export default User;
