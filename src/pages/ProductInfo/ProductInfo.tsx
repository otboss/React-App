import { IonBackButton, IonButton, IonButtons, IonChip, IonContent, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import ItemTile from '../../components/ItemTile/ItemTile';
import { Assets } from '../../misc/Assets';
import { HardwareItem, ItemCategory } from '../../misc/HardwareItem';
import { starOutline } from 'ionicons/icons';
import './ProductInfo.scss';
import "../../theme/global.scss";
import { CartActions } from '../../redux/actions/cart';
import { useSelector, useDispatch } from "react-redux";
import { ReduxActions } from '../../redux/store';

const ProductInfo: React.FC = (props) => {
  //@ts-ignore
  const hardwareItem = useSelector(state => state.productInfoReducer);
  const dispatch = useDispatch();

  const items: Array<HardwareItem> = [
    new HardwareItem()
  ];

  const itemTiles = function (): Array<React.ReactElement> {
    return items.map(hardwareItem => {
      return ItemTile({ hardwareItem });
    });
  }


  const addToCart = (hardwareItem: HardwareItem) => {
    dispatch(ReduxActions.CartActions.add(hardwareItem))
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
              <img />
            </div>
            <div className="product-label">
              <h1>Standard Hammer</h1>
            </div>
            <div className="product-price-container">
              <div className="product-price">
                <span>$550.00</span>
                <div className="additional-details">
                  <span className="shipping-fee">+24.00</span> shipping & handling
                </div>
              </div>
              <div className="product-rating">
                <IonIcon className="rating-star" icon={starOutline}></IonIcon>
                <IonIcon className="rating-star" icon={starOutline}></IonIcon>
                <IonIcon className="rating-star" icon={starOutline}></IonIcon>
                <IonIcon className="rating-star" icon={starOutline}></IonIcon>
                <IonIcon className="rating-star" icon={starOutline}></IonIcon>
                <div className="additional-details">
                  <span>Based on 24 reviews</span>
                </div>
              </div>
            </div>
          </main>
          <footer>
            <div className="add-button-container">
              <div className="quantity-input">
                <IonItem className="quantity-input-item">
                  <IonLabel position="floating">Quantity</IonLabel>
                  <IonInput value={1}></IonInput>
                </IonItem>
              </div>
              <IonChip className="add-button" onClick={() => { addToCart(hardwareItem); }}> Add To Cart</IonChip>
            </div>
          </footer>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default ProductInfo;

interface ProductInfoProps {
  children?: React.ReactNode;
  hardwareItem: HardwareItem;
}
