import React from 'react';
import ReactDOM from 'react-dom';
import { Home } from './components/Home';
import './styles/index.css';

export const startReactApp = () => {
  ReactDOM.render(<Home />, document.getElementById('root'));
};
