import React, { Component } from 'react';
import { getName } from '../../data/candidate';
import logo from '../assets/svg/logo.svg';
import '../components/styles/Home.css';

export class Header extends Component {
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
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {this.renderCandidateName()}
      </header>
    );
  }
}
