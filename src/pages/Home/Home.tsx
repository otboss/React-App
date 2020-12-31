import { IonButtons, IonContent, IonHeader, IonIcon, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import ItemTile from '../../components/ItemTile/ItemTile';
import { Assets } from '../../misc/Assets';
import { HardwareItem, ItemCategory } from '../../misc/HardwareItem';
import { cartOutline, search } from 'ionicons/icons';
import './Home.scss';
import { Link } from 'react-router-dom';
import { Routes } from '../../misc/Routes';
import "../../theme/global.scss";

const Home: React.FC = () => {

  const items: Array<HardwareItem> = [
    new HardwareItem("Hammer", Assets.hammerImg, ItemCategory.Tools)
  ];

  const itemTiles = function (): Array<React.ReactElement> {
    return items.map(hardwareItem => {
      return ItemTile({ hardwareItem });
    });
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar className="ion-toolbar">
          <IonTitle>OT Hardware</IonTitle>
          <IonButtons slot="end">
            <IonIcon className="search-icon" slot="start" icon={search} />
            <Link to={Routes.cart}>
              <IonIcon className="cart-icon" slot="start" icon={cartOutline} />
            </Link>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">OT Hardware</IonTitle>
          </IonToolbar>
        </IonHeader>
        {itemTiles()}
      </IonContent>
    </IonPage>
  );
};

export default Home;
