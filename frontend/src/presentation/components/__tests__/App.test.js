import ReactDOM from 'react-dom';
import React from 'react';
import Home from '../../components/Home';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Home />, div);
  ReactDOM.unmountComponentAtNode(div);
});
