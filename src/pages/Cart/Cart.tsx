import { IonBackButton, IonButtons, IonChip, IonContent, IonHeader, IonIcon, IonLabel, IonLoading, IonPage, IonRouterOutlet, IonSpinner, IonTabBar, IonTabButton, IonTabs, IonTitle, IonToast, IonToolbar } from '@ionic/react';
import { cartOutline, chevronDownOutline, chevronUpOutline, informationCircle, map, personCircle, reorderFour, timeOutline } from 'ionicons/icons';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CartItem } from '../../misc/CartItem';
import { ReduxActions } from '../../redux/store';
import { useHistory } from 'react-router-dom';
import ItemImage from '../../components/ItemImage/ItemImage';
import { Routes } from '../../misc/Routes';
import { Order } from '../../misc/Order';
import { ServerAPI } from '../../misc/ServerAPI';
import './Cart.scss';
import "../../theme/global.scss";

const Cart: React.FC = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  //@ts-ignore
  const cartItems: Array<CartItem> = useSelector(state => Object.values(state.cart.cartItems));
  //@ts-ignore
  const isOrder: boolean = useSelector(state => state.cart.isOrder);
  //@ts-ignore
  const order: Order = useSelector(state => state.cart.order);
  const [showCheckoutLoader, setShowCheckoutLoader] = useState(false);
  const [showCheckoutCompleteToast, setShowCheckoutCompleteToast] = useState(false);
  const [cartItemsState, setCartItemsState] = useState(cartItems);


  const checkout = async function () {
    setShowCheckoutLoader(true);
    await new Promise(function (resolve) {
      setTimeout(resolve, 2000);
    });
    let response: Response;
    try {
      response = await ServerAPI.checkout(cartItems);
      if (response.status != 200) throw response;
      dispatch(ReduxActions.CartActions.emptyCart());
      setShowCheckoutCompleteToast(true);
    }
    catch (err) {
      const response: Response = err;
      switch (response.status) {

      }
    }
    setShowCheckoutLoader(false);
  }

  const getCartItems = function (): Array<React.ReactElement> {
    const cartItems: Array<CartItem> = !isOrder ? Object.values(cartItemsState) : order.cartItems;
    return cartItems.map((cartItem: CartItem) => {
      return (
        <div className="product-details-row">
          <div className="product-image-container">
            <ItemImage imageURL={[cartItem.item.image]}></ItemImage>
          </div>
          {
            !isOrder && (
              <div className="quantity-control-buttons">
                <div className="up-button" onClick={() => { dispatch(ReduxActions.CartActions.add({ ...cartItem, quantity: cartItem.quantity + 1 })); setCartItemsState(cartItems) }}>
                  <IonIcon className="icon" icon={chevronUpOutline} />
                </div>
                <div className="button-spacer"></div>
                <div className="down-button" onClick={() => { dispatch(ReduxActions.CartActions.add({ ...cartItem, quantity: cartItem.quantity - 1 })); setCartItemsState(cartItems) }}>
                  <IonIcon className="icon" icon={chevronDownOutline} />
                </div>
              </div>
            )
          }
          <div className="product-info">
            <div className="product-detail">
              <span>[{cartItem.item.itemCode.slice(0, 8)}] {cartItem.item.label}</span>
            </div>
            <div className="product-detail">
              <div className="product-quantity">
                <span>${cartItem.item.cost.toFixed(2)} x{cartItem.quantity}</span>
              </div>
              <div className="product-total">
                <span>${(cartItem.item.cost * cartItem.quantity + cartItem.item.shippingFee).toFixed(2)}</span>
              </div>
            </div>
            <div className="product-detail">
              {
                cartItem.item.shippingFee > 0 &&
                (<span className="tax-span">(+)${cartItem.item.shippingFee.toFixed(2)} Shipping</span>)
              }
            </div>
          </div>
          <IonLoading
            isOpen={showCheckoutLoader}
            onDidDismiss={() => setShowCheckoutLoader(false)}
            message={'Checking Out..'}
            duration={5000} />
          <IonToast
            isOpen={showCheckoutCompleteToast}
            onDidDismiss={() => setShowCheckoutCompleteToast(false)}
            message="Checkout Complete"
            duration={2000}
          />
        </div>
      );
    });
  }

  const getTotal = function (): number {
    const cartItems: Array<CartItem> = !isOrder ? Object.values(cartItemsState) : order.cartItems;
    let total = 0;
    const allCartItems = Object.values(cartItems);
    allCartItems.forEach((cartItem: CartItem) => {
      total += cartItem.item.cost * cartItem.quantity + cartItem.item.shippingFee;
    })
    return total;
  }

  const viewOrders = function () {
    history.push(Routes.orders);
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar className="ion-toolbar">
          <IonButtons slot="start">
            <IonBackButton defaultHref="/" />
          </IonButtons>
          <IonTitle>{!isOrder ? "Cart" : "Order Info"}</IonTitle>
          <IonButtons slot="end">
            <IonIcon className="history-icon" slot="start" icon={timeOutline} onClick={viewOrders} />
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        {
          !isOrder && Object.keys(cartItems).length == 0 ?
            (
              <div className="empty-cart-placeholder">
                <div>
                  <IonIcon className="empty-placeholder-icon" icon={cartOutline} />
                </div>
                <span>You cart is currently empty</span>
              </div>
            ) :
            (
              <div className="cart-contents-container">

                <main>
                  {
                    isOrder && (
                      <div className="cart-section-container">
                        <div className="cart-section-heading">
                          <div className="section-label">
                            <span>Order Details</span>
                          </div>
                        </div>
                        <div className="cart-section-body">

                          <div className="order-detail-row">
                            <div className="order-detail">
                              <div className="detail-label">
                                <span>Order No.</span>
                              </div>
                              <div>
                                <span>:</span>
                              </div>
                              <div className="detail-value">
                                <span>{order.orderNumber}</span>
                              </div>
                            </div>
                            <div className="order-detail">
                            </div>
                          </div>

                          <div className="order-detail-row">
                            <div className="order-detail">
                              <div className="detail-label">
                                <span>Tracking No.</span>
                              </div>
                              <div>
                                <span>:</span>
                              </div>
                              <div className="detail-value">
                                <span>{order.trackingNumber}</span>
                              </div>
                            </div>
                            <div className="order-detail">
                            </div>
                          </div>

                          <div className="order-detail-row">
                            <div className="order-detail">
                              <div className="detail-label">
                                <span>Date</span>
                              </div>
                              <div>
                                <span>:</span>
                              </div>
                              <div className="detail-value">
                                <span>{(new Date(order.timestamp)).toString().slice(4, 21)}</span>
                              </div>
                            </div>
                            <div className="order-detail">
                            </div>
                          </div>

                        </div>
                      </div>
                    )
                  }

                  <div className="cart-section-container">
                    {
                      isOrder && (
                        <div className="cart-section-heading">
                          <div className="section-label">
                            <span>Cart Items</span>
                          </div>
                        </div>
                      )
                    }
                    <div className="cart-section-body">
                      {getCartItems()}
                    </div>
                  </div>

                </main>

                <footer>
                  <div className="footer-inner">

                    <div className={!isOrder ? "total" : "total-order"}>
                      <div>
                        <span>Total</span>
                      </div>
                      <div className="total-container">
                        <span>${getTotal().toFixed(2)}</span>
                      </div>
                    </div>
                    {
                      !isOrder && (
                        <IonChip className="checkout-button" onClick={() => { checkout() }}>Checkout Now</IonChip>
                      )
                    }
                  </div>
                </footer>

              </div>
            )
        }
      </IonContent>
    </IonPage>
  );
};

export default Cart;
