import React, { Component } from 'react';
import './css/reset.css';
import './css/App.css';
import Header from './header.js';
import Game from './game.js';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Game />
      </div>
    );
  }
}

export default App;
