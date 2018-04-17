import React, { Component } from 'react';
import './User.css';
import { Link } from 'react-router-dom';
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
      <div className="User row container-fluid">
        <div className="col-12 container-fluid">
        <Link to="/">
            <button type="button" className="btn btn-warning towelcomebutton"><img className="jukeboxIcon" src={require("./jukebox.png")}/></button>
        </Link>
        <br/>
          <h2 className="userTitle text-center">My Trackz</h2>
        </div>
      </div>
    );
  }
}

export default User;
