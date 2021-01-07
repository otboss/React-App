import { IonBackButton, IonButtons, IonContent, IonHeader, IonIcon, IonPage, IonRippleEffect, IonSpinner, IonTitle, IonToolbar } from '@ionic/react';
import React, { useEffect, useState } from 'react';
import { Order } from '../../misc/Order';
import { ServerAPI } from '../../misc/ServerAPI';
import { chevronForwardOutline, timeOutline } from 'ionicons/icons';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';
import { ReduxActions } from '../../redux/store';
import './Orders.scss';
import "../../theme/global.scss";

const Orders: React.FC = () => {
  const history = useHistory();
  let [initComplete, setInitComplete] = useState(false);
  const [orders, setOrders] = useState([new Order()]);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!initComplete) {
      ServerAPI.getOrders().then(orders => setOrders(orders));
      setInitComplete(true);
    }
  });

  const viewOrderDetails = function (order: Order) {
    dispatch(ReduxActions.CartActions.setOrder(order));
    history.goBack();
  }

  const getOrders = function () {
    return orders.map((order: Order) => {
      return (
        <div className="order-list-item ion-activatable ripple-parent" onClick={() => { viewOrderDetails(order) }}>
          <div className="order-details">
            <div>
              <span>{order.orderNumber}</span>
            </div>
            <div>
              <span>{order.trackingNumber}</span>
            </div>
            <div>
              <span>Items: {order.cartItems.length}</span>
            </div>
            <div className="order-timestamp">
              <span>{(new Date(order.timestamp)).toString().slice(4, 21)}</span>
            </div>
          </div>
          <div>
            <IonIcon className="icon" icon={chevronForwardOutline} />
          </div>
          <IonRippleEffect></IonRippleEffect>
        </div>
      );
    });
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar className="ion-toolbar">
          <IonButtons slot="start">
            <IonBackButton defaultHref="/" />
          </IonButtons>
          <IonTitle>Orders</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent id="orderPage" fullscreen>
        {
          !initComplete && (
            <div className="init-div">
              <IonSpinner className="spinner"></IonSpinner>
            </div>
          )
        }
        {
          initComplete && orders.length == 0 && (
            <div className="empty-orders-placeholder">
              <div>
                <IonIcon className="history-icon" icon={timeOutline} />
              </div>
              <span>No orders made yet</span>
            </div>
          )
        }
        {getOrders()}
      </IonContent>
    </IonPage>
  );
};

export default Orders;
