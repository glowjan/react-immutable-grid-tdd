import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import GridContainer from "./GridContainer";

class App extends Component {
  render() {

      var rows = ["Apples", "Bananas", "Oranges"]

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <GridContainer rows={rows} columns={3}/>
      </div>
    );
  }
}

export default App;
