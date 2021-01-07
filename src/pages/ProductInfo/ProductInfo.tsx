import { IonBackButton, IonButtons, IonChip, IonContent, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonPage, IonTitle, IonToast, IonToolbar } from '@ionic/react';
import React, { useState } from 'react';
import { HardwareItem } from '../../misc/HardwareItem';
import { star, starHalfOutline, starOutline } from 'ionicons/icons';
import { useSelector, useDispatch } from "react-redux";
import { ReduxActions } from '../../redux/store';
import { CartItem } from '../../misc/CartItem';
import ItemImage from '../../components/ItemImage/ItemImage';
import './ProductInfo.scss';
import "../../theme/global.scss";

const ProductInfo: React.FC = () => {
  //@ts-ignore
  const hardwareItem: HardwareItem = useSelector(state => state.productInfo);
  const [showAddToCardToast, setShowAddToCardToast] = useState(false);
  const [itemQuantity, setItemQuantity] = useState(1);
  const dispatch = useDispatch();

  const addToCart = (hardwareItem: HardwareItem, quantity: number) => {
    dispatch(ReduxActions.CartActions.add(
      new CartItem(hardwareItem, quantity)
    ));
    setShowAddToCardToast(true);
  }

  const setItemQuantityFromField = function (e: any) {
    if (!isNaN(parseInt(e.target.value))) {
      setItemQuantity(parseInt(e.target.value));
      return;
    }
    setItemQuantity(1);
  }

  const getStars = function (): Array<React.ReactElement> {
    const stars: Array<React.ReactElement> = [];
    for (let x = 0; x < parseInt(hardwareItem.rating.toString()); x++) {
      stars.push(
        <IonIcon className="rating-star-filled" icon={star}></IonIcon>
      );
    }
    if (hardwareItem.rating.toString().indexOf(".") != -1) {
      stars.push(
        <IonIcon className="rating-star-filled" icon={starHalfOutline}></IonIcon>
      );
    }
    for (let x = 0; x < 5 - stars.length; x++) {
      stars.push(
        <IonIcon className="rating-star" icon={star}></IonIcon>
      );
    }
    return stars;
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar className="ion-toolbar">
          <IonButtons slot="start">
            <IonBackButton defaultHref="/" />
          </IonButtons>
          <IonTitle>Product Info</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div className="product-info-container">
          <main>
            <div className="product-image">
              <ItemImage imageURL={[hardwareItem.image]}></ItemImage>
            </div>
            <div className="product-label">
              <h1>{hardwareItem.label}</h1>
            </div>
            <div className="product-price-container">
              <div className="product-price">
                <span>${hardwareItem.cost.toFixed(2)}</span>
                <div className="additional-details">
                  {
                    hardwareItem.shippingFee > 0 &&
                    (<span><span className="shipping-fee">+${hardwareItem.shippingFee.toFixed(2)}</span> shipping and handling</span>)
                  }
                </div>
              </div>
              <div className="product-rating">
                {getStars()}
                <div className="additional-details">
                  <span>Based on {hardwareItem.reviews} reviews</span>
                </div>
              </div>
            </div>
          </main>
          <footer>
            <div className="add-button-container">
              <div className="quantity-input">
                <IonItem className="quantity-input-item">
                  <IonLabel position="floating">Quantity</IonLabel>
                  <IonInput value={itemQuantity} onIonChange={setItemQuantityFromField}></IonInput>
                </IonItem>
              </div>
              <IonChip className="add-button" onClick={() => { addToCart(hardwareItem, itemQuantity); }}> Add To Cart</IonChip>
            </div>
          </footer>
        </div>
      </IonContent>
      <IonToast
        isOpen={showAddToCardToast}
        onDidDismiss={() => setShowAddToCardToast(false)}
        message="Item added to card"
        duration={2000}
      />
    </IonPage >
  );
};

export default ProductInfo;