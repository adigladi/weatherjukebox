import React, { Component } from 'react';
import './User.css';
import { Link } from 'react-router-dom';
import { modelInstance } from '../data/WeatherModel.js'
class User extends Component {

  constructor(props) {
    super(props)
    
    this.state = {
      myTracks: modelInstance.getMyTracks()
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
      myTracks: modelInstance.getMyTracks()
    })
  }

  render() {
    let myList = "";
    myList = this.state.myTracks.map((track, i) =>
      <tr>
        <th scope="row">1</th>
        <td>Mark</td>
        <td>Otto</td>
        <td>@mdo</td>
        <td>@mdo</td>
      </tr>
    )
    return (
      <div className="User row container-fluid">
        <div className="col-12 container-fluid">
        <Link to="/">
            <button type="button" className="btn btn-warning towelcomebutton"><img id="boxjuke" src={require("./jukebox.png")} draggable="false"/></button>
        </Link>
        <br/>
          <h2 className="userTitle text-center">My Trackz</h2>
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">Title</th>
                <th scope="col">Artist</th>
                <th scope="col">Genre</th>
                <th scope="col">Weather</th>
                <th scope="col">Date</th>
              </tr>
            </thead>
            <tbody>
              {myList}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default User;
