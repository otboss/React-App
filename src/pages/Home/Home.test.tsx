import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Home';
import { store } from '../../redux/store';
import { Provider } from 'react-redux';
import { IonReactRouter } from '@ionic/react-router';
import { IonRouterOutlet } from '@ionic/react';

it('renders without crashing', () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Provider store={store}>
      <IonReactRouter>
        <IonRouterOutlet>
          <Home></Home>
        </IonRouterOutlet>
      </IonReactRouter>
    </Provider>,
    div
  );
});