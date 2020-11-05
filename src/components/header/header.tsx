import React from 'react';
import { IonHeader, IonToolbar, IonTitle, IonIcon} from '@ionic/react';
import './header.scss';
interface ContainerProps {
  name: string;
}

const Header: React.FC<ContainerProps> = ({ name }) => {
  return (
      <IonHeader color="primary">
        <IonToolbar color="primary">
          <IonIcon name="add"></IonIcon>
          <IonTitle>Tab 1</IonTitle>
        </IonToolbar>
      </IonHeader>
  );
};

export default Header;
