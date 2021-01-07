import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home/Home';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.scss';
import Cart from './pages/Cart/Cart';
import { Routes } from './misc/Routes';
import ProductInfo from './pages/ProductInfo/ProductInfo';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import Orders from './pages/Orders/Orders';

const App: React.FC = () => (
  <IonApp>
    <Provider store={store}>
      <IonReactRouter>
        <IonRouterOutlet>
          <Route path={"/" + Routes.home} component={Home} exact={true} />
          <Route path={"/" + Routes.cart} component={Cart} exact={true} />
          <Route path={"/" + Routes.orders} component={Orders} exact={true} />
          <Route path={"/" + Routes.productInfo} component={ProductInfo} exact={true} />
          <Route exact path="/" render={() => <Redirect to="/home" />} />
        </IonRouterOutlet>
      </IonReactRouter>
    </Provider>
  </IonApp>
);

export default App;
