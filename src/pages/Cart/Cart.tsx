import { IonBackButton, IonButtons, IonChip, IonContent, IonHeader, IonIcon, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import './Cart.scss';
import "../../theme/global.scss";

const Cart: React.FC = () => {

  const getTimestamp = (): string => {
    const date = new Date();
    return `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`;
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar className="ion-toolbar">
          <IonButtons slot="start">
            <IonBackButton defaultHref="/" />
          </IonButtons>
          <IonTitle>Cart</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div className="cart-contents-container">

          <main>
            <div className="cart-section-container">
              <div className="cart-section-heading">
                <div className="section-label">
                  <span>Order Details</span>
                </div>
                <div>
                  <span>{getTimestamp()}</span>
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
                      <span>664</span>
                    </div>
                  </div>
                  <div className="order-detail">
                  </div>
                </div>

                <div className="order-detail-row">
                  <div className="order-detail">
                    <div className="detail-label">
                      <span>Order Txn No.</span>
                    </div>
                    <div>
                      <span>:</span>
                    </div>
                    <div className="detail-value">
                      <span>664</span>
                    </div>
                  </div>
                  <div className="order-detail">
                  </div>
                </div>



              </div>
            </div>

            <div className="cart-section-container">
              <div className="cart-section-heading">
                <div className="section-label">
                  <span>Product Details</span>
                </div>
              </div>
              <div className="cart-section-body">

                <div className="product-details-row">
                  <div className="product-detail">
                    <span>[H102] Standard Hammer</span>
                  </div>
                  <div className="product-detail">
                    <div className="product-quantity">
                      <span>122x2</span>
                    </div>
                    <div className="product-total">
                      <span>122x2</span>
                    </div>
                  </div>
                  <div className="product-detail">
                    <span className="tax-span">(+)6.00% TAX</span>
                  </div>
                </div>

              </div>
            </div>

          </main>

          <footer>
            <div className="footer-inner">

              <div className="total">
                <div>
                  <span>Total</span>
                </div>
                <div>
                  <span>$50000</span>
                </div>
              </div>
              <IonChip className="checkout-button">Checkout Now</IonChip>
              {/* <IonButton color="primary" expand="full">Checkout Now</IonButton> */}
            </div>
          </footer>

        </div>
      </IonContent>
    </IonPage>
  );
};

export default Cart;
