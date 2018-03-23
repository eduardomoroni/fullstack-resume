import ReactDOM from 'react-dom';
import React from 'react';
import App from './App';
import './index.css';

export const startReactApp = () => {
  ReactDOM.render(<App />, document.getElementById('root'));
};
