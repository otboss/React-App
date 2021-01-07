import { IonRippleEffect } from '@ionic/react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { HardwareItem } from '../../misc/HardwareItem';
import { Routes } from '../../misc/Routes';
import { ReduxActions } from '../../redux/store';
import React from 'react';
import ItemImage from '../ItemImage/ItemImage';
import './ItemTile.scss';

const ItemTile = (props: ItemTileProps): React.ReactElement => {
  const history = useHistory();
  const dispatch = useDispatch();

  const viewProductInfo = (hardwareItem: HardwareItem): void => {
    dispatch(ReduxActions.ProductInfoActions.set(hardwareItem));
    history.push("/" + Routes.productInfo);
  }

  return (
    <div className="list-item ion-activatable ripple-parent" onClick={() => { viewProductInfo(props.hardwareItem) }}>
      <div className="item-image-container">
        <div className="item-image">
          <ItemImage imageURL={[props.hardwareItem.image]}></ItemImage>
        </div>
      </div>
      <div className="item-description">
        <div className="item-label">
          <span>{props.hardwareItem.label}</span>
        </div>
        <div className="item-info-container">
          <div className="item-info">
            <span>{props.hardwareItem.description}</span>
          </div>
        </div>
        <div className="item-cost-container">
          <span>${props.hardwareItem.cost.toFixed(2)}</span>
        </div>
      </div>
      <div>

      </div>
      <IonRippleEffect></IonRippleEffect>
    </div>
  );
};

export default ItemTile;


interface ItemTileProps {
  hardwareItem: HardwareItem
}