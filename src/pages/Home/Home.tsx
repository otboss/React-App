import { IonButtons, IonContent, IonHeader, IonIcon, IonPage, IonSearchbar, IonTitle, IonToolbar } from '@ionic/react';
import React, { useEffect, useState } from 'react';
import ItemTile from '../../components/ItemTile/ItemTile';
import { HardwareItem, ItemCategory } from '../../misc/HardwareItem';
import { cartOutline, search } from 'ionicons/icons';
import { Link } from 'react-router-dom';
import { Routes } from '../../misc/Routes';
import { ServerAPI } from '../../misc/ServerAPI';
import { useDispatch } from 'react-redux';
import { ReduxActions } from '../../redux/store';
import './Home.scss';
import "../../theme/global.scss";

const Home: React.FC = () => {
  const [initialLoad, setInitialLoad] = useState(true);
  const [searchOn, setSearchOn] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [hardwareItems, setHardwareItems] = useState([new HardwareItem("", 1, "", "", 0, "", 24, "", ItemCategory.Tools)]);
  const dispatch = useDispatch();


  useEffect(() => {
    if (initialLoad) {
      ServerAPI.getHardwareItems().then(items => setHardwareItems(items));
      setInitialLoad(false);
    }
  });

  const focusSearchbar = function () {
    setTimeout(() => {
      //@ts-ignore
      document.querySelectorAll(".searchbar-input-container input")[0]["focus"]()
    }, 300);
  }

  const itemTiles = function (): Array<React.ReactElement> {
    const itemTiles: Array<React.ReactElement> = [];
    hardwareItems.forEach((hardwareItem) => {
      if (hardwareItem.label.toLowerCase().indexOf(searchQuery.toLowerCase()) != -1) {
        itemTiles.push(ItemTile({ hardwareItem }))
      }
    });
    return itemTiles;
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar className="ion-toolbar">
          {
            !searchOn && (
              <IonTitle>OM Hardware</IonTitle>
            )
          }
          {
            !searchOn ? (
              <IonButtons slot="end">
                <IonIcon className="search-icon" slot="start" icon={search} onClick={() => { setSearchOn(true); focusSearchbar(); }} />
                <Link to={Routes.cart} onClick={() => { dispatch(ReduxActions.CartActions.toggleOrderOff()) }}>
                  <div className="cart-icon-container">
                    <IonIcon className="cart-icon" slot="start" icon={cartOutline} />
                  </div>
                </Link>
              </IonButtons>
            ) : (
                <IonSearchbar onIonChange={e => setSearchQuery(e.detail.value!)} showCancelButton="always" onIonCancel={() => { setSearchOn(false) }}></IonSearchbar>
              )
          }
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
