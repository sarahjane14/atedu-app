import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { initializeIcons } from '@uifabric/icons';
import { getIconClassName } from '@uifabric/styling';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonPage,
  IonContent
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { homeOutline, readerOutline, calendarClearOutline, chatboxOutline, ellipsisHorizontalOutline } from 'ionicons/icons';
import Tab1 from './pages/Tab1';
import Tab2 from './pages/Tab2';
import Tab3 from './pages/Tab3';




/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

/* FluentUI utilities */
import './assets/scss/fluentui-utils.scss';
import Menu from './components/menu/menu';
import Header from './components/header/header';
initializeIcons();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <Menu></Menu>
      <IonPage>
        <Header name="Tab 1 page"></Header>
        <IonContent>
          <IonTabs>
            <IonRouterOutlet>
              <Route path="/tab1" component={Tab1} exact={true} />
              <Route path="/tab2" component={Tab2} exact={true} />
              <Route path="/tab3" component={Tab3} />
              <Route path="/" render={() => <Redirect to="/tab1" />} exact={true} />
            </IonRouterOutlet>
            <IonTabBar slot="bottom" >
              <IonTabButton tab="tab1" href="/tab1">
                <i className={`fl-icon ${getIconClassName('Home')}`}></i>
                <IonLabel>Home </IonLabel>
              </IonTabButton>
              <IonTabButton tab="tab2" href="/tab2">
                <IonIcon icon={readerOutline} />
                <IonLabel>To Do</IonLabel>
              </IonTabButton>
              <IonTabButton tab="tab3" href="/tab3">
                <IonIcon icon={calendarClearOutline} />
                <IonLabel>Schedule</IonLabel>
              </IonTabButton>
              <IonTabButton tab="tab3" href="/tab4">
                <IonIcon icon={chatboxOutline} />
                <IonLabel>Messages</IonLabel>
              </IonTabButton>
              <IonTabButton>
                <IonIcon icon={ellipsisHorizontalOutline} />
                <IonLabel>More</IonLabel>
              </IonTabButton>
            </IonTabBar>
          </IonTabs>
        </IonContent>
      </IonPage>
    </IonReactRouter>
  </IonApp>
);

export default App;
