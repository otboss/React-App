import React from 'react';
import ReactDOM from 'react-dom';
import Orders from './Orders';
import { store } from '../../redux/store';
import { Provider } from 'react-redux';

it('renders without crashing', () => {
  const div = document.createElement("div");
  ReactDOM.render(<Provider store={store}><Orders></Orders></Provider>, div);
});