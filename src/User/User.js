import React, { Component } from 'react';
import './User.css';
import { modelInstance } from '../data/WeatherModel.js'
class User extends Component {

  constructor(props) {
    super(props)
    
    this.state = {
    }
  }

  componentDidMount() {
    modelInstance.addObserver(this)
  }

  componentWillUnmount() {
    modelInstance.removeObserver(this)
  }

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
