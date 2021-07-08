import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import Header from "./Components/Header/Header";
import Players from "./Components/Players/Players";

class App extends Component {
  state = {
    players: []
  };
  componentDidMount() {
    axios
      .get("http://localhost:5000/api/players")
      .then(res => {
        this.setState({
          players: res.data
        });
      })
      .catch(err => {
        console.log(err.response);
      });
  }
  render() {
    return (
      <div className="App">
        <div className="container">
          <Header />
          <Players players={this.state.players} />
        </div>
      </div>
    );
  }
}

export default App;
