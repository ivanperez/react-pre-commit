import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing2', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('no crashing', () => {
  expect(3).toBe(3);
});
