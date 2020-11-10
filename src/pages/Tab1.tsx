import React from 'react';
import { IonContent, IonPage, IonHeader, IonToolbar, IonTitle } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';
import Header from '../components/header/header';
import Dashboard from '../components/dashboard/dashboard';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      {/* <Header name="Tab 1 page"></Header> */}
      <IonContent fullscreen>
        {/* <Dashboard name="Tab 1 page" />
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 1</IonTitle>
        </IonToolbar>
      </IonHeader> 
      <IonContent fullscreen>*/}
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Tab 1 page" />
        <Dashboard name="Tab 1 page" />
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
