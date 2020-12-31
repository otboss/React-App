import { IonRippleEffect } from '@ionic/react';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { HardwareItem } from '../../misc/HardwareItem';
import { Routes } from '../../misc/Routes';
import { ReduxActions } from '../../redux/store';
import './ItemTile.scss';

const ItemTile = (props: ItemTileProps): React.ReactElement => {
  const history = useHistory();
  const dispatch = useDispatch();

  const viewProductInfo = (hardwareItem: HardwareItem): void => {
    dispatch(ReduxActions.ProductInfoActions.set(hardwareItem));
    history.push("/" + Routes.productInfo);
  }

  return (
    <div className="list-item  ion-activatable ripple-parent" onClick={() => { viewProductInfo(props.hardwareItem) }}>
      <div className="item-image">
        <img src={props.hardwareItem.image} />
      </div>
      <div className="item-description">
        <h1>Hammer</h1>
        <span>A general purpose Hammer</span>
        <div className="item-cost-container">
          <span>$550</span>
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