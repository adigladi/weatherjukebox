import React, { Component } from 'react';
import './User_main.css';
import { Link } from 'react-router-dom';
import { modelInstance } from '../data/WeatherModel.js'
class User_main extends Component {

  constructor(props) {
    super(props)
    
    this.state = {
      myTracks: modelInstance.getMyTracks(),
      myBlacklistTracks: modelInstance.getBlacklist(),
      myHistory: modelInstance.getMyHistory(),
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
      myTracks: modelInstance.getMyTracks(),
      myBlacklistTracks: modelInstance.getBlacklist(),
      myHistory: modelInstance.getMyHistory(),
    })
  }

  clickTrash = (e) => {
    modelInstance.removeMyTracks(e.target.title);
  }

  clickRemoveBlacklist = (r) => {
    modelInstance.removeFromBlacklist(r.target.title);
  }

  clickClearHistory = () => {
    modelInstance.clearMyHistory();
  }

  render() {
    let myList = "";
    myList = this.state.myTracks.map((track, i) =>
      <tr key={i}>
        <td className="text-center">{this.state.myTracks[i].song.title+" - "+this.state.myTracks[i].song.artist.name}</td>
      </tr>
    )

    let myHistoryList = "";
    myHistoryList = this.state.myHistory.map((track, i) =>
      <tr key={i}>
        <td className="text-center">{this.state.myHistory[i].song.title+" - "+this.state.myHistory[i].song.artist.name}</td>
      </tr>
    )

    return (
      <div className="User row container-fluid">
        <div className="col-12 container-fluid">
        <Link to="/">
            <button type="button" className="btn btn-warning towelcomebutton"><img id="boxjuke" src={require("./jukebox2.png")} draggable="false"/></button>
        </Link>
        <Link to="/user_all">
            <button type="button" id="userswitch" className="btn btn-warning"><img id="boxjuke" src={require("./settings.png")} draggable="false"/></button>
        </Link>
        <br/>
          <h2 className="userTitle text-center">Hello User!</h2>
          <div className="row">
          <div className="col-md-6">
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col" className="text-center">Your Tracks</th>
              </tr>
            </thead>
            <tbody>
              {myList.reverse()}
            </tbody>
          </table>
          </div>
          <div className="col-md-6">
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col" className="text-center">Your History<img id="trashbin" src={require("./trash.png")} draggable="false" alt="X" onClick={this.clickClearHistory}/></th>
              </tr>
            </thead>
            <tbody>
              {myHistoryList.reverse()}
            </tbody>
          </table>
          </div>
          </div>
        </div>
      </div>
    );
  }
}

export default User_main;
