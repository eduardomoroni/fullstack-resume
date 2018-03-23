import React, { Component } from 'react';
import { getName } from '../data/candidate';
import logo from './assets/svg/logo.svg';
import './App.css';

class App extends Component {
  state = { name: '' };

  componentDidMount = async () => {
    const name = await getName();
    this.setState({ name });
  };

  renderCandidateName = () =>
    this.state.name && (
      <h1 className="App-title">{`${this.state.name} Resume`}</h1>
    );

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {this.renderCandidateName()}
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
