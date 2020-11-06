import React from 'react';
import { IonHeader, IonToolbar, IonTitle, IonIcon, IonButton, IonMenu, IonContent, IonList, IonItem, IonLabel } from '@ionic/react';
import { notificationsOutline, shieldOutline } from 'ionicons/icons';
import './menu.scss';

const Menu: React.FC = () => {
  return (
    <>
      <IonMenu side="start" contentId="mainContent">
        <IonHeader>
          <IonToolbar>
            <IonTitle>NGG</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonList>
            <IonItem>
              <IonIcon slot="start" icon={notificationsOutline}></IonIcon>
              <IonLabel>Notifications and Sound</IonLabel>
            </IonItem>
            <IonItem>
              <IonIcon slot="start" icon={shieldOutline}></IonIcon>
              <IonLabel>Privacy</IonLabel>
            </IonItem>
          </IonList>
        </IonContent>
      </IonMenu>
    </>
  );
};

export default Menu;
