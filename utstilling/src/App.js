import React, { Component } from 'react';
import './App.css';
import Title from "./Title";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
            <Title/>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;