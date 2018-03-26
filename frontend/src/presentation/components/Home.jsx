import React from 'react';
import './styles/Home.css';
import { Career } from './Career';
import { Header } from './Header';
import { Experience } from './Experience';

export const Home = () => (
  <div className="App">
    <Header/>
    <Career/>
    <Experience/>
  </div>
);
