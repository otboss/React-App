import { IonButtons, IonContent, IonHeader, IonIcon, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React, { useState } from 'react';
import ItemTile from '../../components/ItemTile/ItemTile';
import { HardwareItem } from '../../misc/HardwareItem';
import { cartOutline, search } from 'ionicons/icons';
import './Home.scss';
import { Link } from 'react-router-dom';
import { Routes } from '../../misc/Routes';
import "../../theme/global.scss";
import { ServerAPI } from '../../misc/ServerAPI';

const Home: React.FC = () => {
  const initialState: Array<HardwareItem> = [];
  const [hardwareItems, addHardwareItem] = useState(initialState);

  const itemTiles = function (): Array<React.ReactElement> {
    return hardwareItems.map(hardwareItem => {
      return ItemTile({ hardwareItem });
    });
  }

  const fetchHardwareItems = async (offset: number, limit: number = 20): Array<HardwareItem> => {
    await ServerAPI.getHardwareItems();

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
