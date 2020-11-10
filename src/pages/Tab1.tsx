import React from 'react';
import { IonContent, IonPage } from '@ionic/react';
import './Tab1.css';
import Dashboard from '../components/dashboard/dashboard';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <Dashboard name="Tab 1 page" />
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
