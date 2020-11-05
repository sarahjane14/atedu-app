import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonSearchbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';
import Header from '../components/header/header';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <Header name="Tab 1 page"></Header>
      <IonContent >
        <ExploreContainer name="Tab 1 page" />
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
