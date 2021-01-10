import React from 'react';
import ReactDOM from 'react-dom';
import Cart from './Cart';
import { store } from '../../redux/store';
import { Provider } from 'react-redux';

it('renders without crashing', () => {
  const div = document.createElement("div");
  ReactDOM.render(<Provider store={store}><Cart></Cart></Provider>, div);
});