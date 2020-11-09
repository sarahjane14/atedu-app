import React from 'react';
import { IonHeader, IonToolbar, IonTitle, IonIcon, IonButton, IonMenu, IonContent, IonList, IonItem, IonMenuButton, IonButtons, IonAvatar, IonBadge } from '@ionic/react';
import { menuOutline, searchOutline, notificationsOutline, checkmarkCircle } from 'ionicons/icons';
import './header.scss';
interface ContainerProps {
  name: string;
}

const Header: React.FC<ContainerProps> = ({ name }) => {
  return (
    <>
      <div id="mainContent">
        <IonHeader>
          <IonToolbar color="primary" >
            <IonButtons slot="start" >
              <IonButton shape="round">
                <IonMenuButton></IonMenuButton>
              </IonButton>
            </IonButtons>
            <IonTitle>Atedu</IonTitle>
            <IonButtons slot="end" >
              <IonButton shape="round" >
                <IonIcon icon={searchOutline}></IonIcon>
              </IonButton>
              <IonButton shape="round" >
                <IonIcon icon={notificationsOutline}></IonIcon>
                <IonBadge color="danger">66</IonBadge>
              </IonButton>
            </IonButtons>

            <IonItem slot="end" color="primary" className="at-persona">
              <IonAvatar slot="start">
                <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" />
                <IonIcon icon={checkmarkCircle} color="success"></IonIcon>
              </IonAvatar>
            </IonItem>
          </IonToolbar>
        </IonHeader>
      </div>
    </>
  );
};

export default Header;
