import React, { Component } from 'react';
import { getName } from '../../data/candidate';
import logo from '../assets/svg/logo.svg';
import '../components/styles/Header.css';

export class Header extends Component {
  state = { name: '' };

  componentDidMount = async () => {
    const name = await getName();
    this.setState({ name });
  };

  render() {
    return (
      <header className="App-header">
        <img src={logo} className="React-logo" alt="logo" />
        <h1 className="Header-title">{`${this.state.name} Resume`}</h1>
      </header>
    );
  }
}
