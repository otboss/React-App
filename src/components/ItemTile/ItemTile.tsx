import { IonRippleEffect } from '@ionic/react';
import React from 'react';
import { Link } from 'react-router-dom';
import { HardwareItem } from '../../misc/HardwareItem';
import { Routes } from '../../misc/Routes';
import './ItemTile.scss';

const ItemTile = (props: ItemTileProps): React.ReactElement => {
  return (
    <Link className="product-info-link" to={Routes.productInfo}>
      <div className="list-item  ion-activatable ripple-parent">
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
    </Link>
  );
};

export default ItemTile;


interface ItemTileProps {
  hardwareItem: HardwareItem
}