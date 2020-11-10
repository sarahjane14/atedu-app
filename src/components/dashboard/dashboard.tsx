import React from 'react';
import { IonHeader, IonCard, IonImg, IonGrid, IonRow, IonCol, IonButton, IonToolbar, IonTitle, IonIcon, IonItem, IonLabel, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonContent } from '@ionic/react';
import { initializeIcons } from '@uifabric/icons';
import { getIconClassName } from '@uifabric/styling';
import { list, pencil, alarmOutline, schoolOutline } from 'ionicons/icons';
import './dashboard.scss';
initializeIcons();

interface ContainerProps {
  name: string;
}

const Dashboard: React.FC<ContainerProps> = ({ name }) => {
  return (
    <IonContent className="dashboard-wrapper">

      <IonCard className="dashboard-header ion-margin">
        <h6>Hi, Mona</h6>
        <p>We prepare this dashboard to help and guide you all day!</p>
        <span><img src="/assets/greetings-boy.png" /></span>
      </IonCard>

      <IonCard className="dashboard-attendance ion-margin">
        <h6>95% Attendance</h6>
        <p>Keep it up!</p>
      </IonCard>

      <section className="dashboard-schedule ion-margin">
        <h6>My Schedule</h6>

        <div className="schedule-wrapper">
          <IonCard className="schedule-card" >
            <IonGrid>
              <IonRow className="ion-align-items-start">
                <IonCol>
                  <IonCardTitle >Engelsk B</IonCardTitle>
                </IonCol>
                <IonCol className="ion-align-self-end" size="auto">
                  <IonCardSubtitle color="primary">
                    <i className={`fl-icon ${getIconClassName('SkypeCircleClock')}`}></i>
                          Up next
                  </IonCardSubtitle>
                </IonCol>
              </IonRow>
              <IonRow className="ion-align-items-start">
                <IonCol>
                  <IonCardSubtitle>8:00-9:00</IonCardSubtitle>
                </IonCol>
                <IonCol className="ion-align-self-end" size-sm size="auto">
                  <IonCardSubtitle>R. 302 A </IonCardSubtitle>
                </IonCol>
              </IonRow>
            </IonGrid>
            <IonGrid>
              <IonRow>
                <IonButton type="button" color="primary">
                  <IonIcon slot="start" icon={list}></IonIcon> 1 To do
                </IonButton>
              </IonRow>
            </IonGrid>
          </IonCard>
          <IonCard className="schedule-card" >
            <IonGrid>
              <IonRow className="ion-align-items-start">
                <IonCol>
                  <IonCardTitle >Engelsk B</IonCardTitle>
                </IonCol>
                <IonCol className="ion-align-self-end" size="auto">
                  <IonCardSubtitle color="primary">
                    <i className={`fl-icon ${getIconClassName('SkypeCircleClock')}`}></i>
                          Up next
                  </IonCardSubtitle>
                </IonCol>
              </IonRow>
              <IonRow className="ion-align-items-start">
                <IonCol>
                  <IonCardSubtitle>8:00-9:00</IonCardSubtitle>
                </IonCol>
                <IonCol className="ion-align-self-end" size-sm size="auto">
                  <IonCardSubtitle>R. 302 A </IonCardSubtitle>
                </IonCol>
              </IonRow>
            </IonGrid>
            <IonGrid>
              <IonRow>
                <IonButton type="button" color="primary">
                  <IonIcon slot="start" icon={list}></IonIcon> 1 To do
                </IonButton>
              </IonRow>
            </IonGrid>
          </IonCard>
          <IonCard className="schedule-card" >
            <IonGrid>
              <IonRow className="ion-align-items-start">
                <IonCol>
                  <IonCardTitle >Engelsk B</IonCardTitle>
                </IonCol>
                <IonCol className="ion-align-self-end" size="auto">
                  <IonCardSubtitle color="primary">
                    <i className={`fl-icon ${getIconClassName('SkypeCircleClock')}`}></i>
                          Up next
                  </IonCardSubtitle>
                </IonCol>
              </IonRow>
              <IonRow className="ion-align-items-start">
                <IonCol>
                  <IonCardSubtitle>8:00-9:00</IonCardSubtitle>
                </IonCol>
                <IonCol className="ion-align-self-end" size-sm size="auto">
                  <IonCardSubtitle>R. 302 A </IonCardSubtitle>
                </IonCol>
              </IonRow>
            </IonGrid>
            <IonGrid>
              <IonRow>
                <IonButton type="button" color="primary">
                  <IonIcon slot="start" icon={list}></IonIcon> 1 To do
                </IonButton>
              </IonRow>
            </IonGrid>
          </IonCard>
        </div>
      </section>

      <section className="dashboard-due">
        <h6>Due Soon</h6>
        <div className="due-wrapper">
          <IonCard className="due-card">
            <IonGrid>
              <IonRow>
                <IonCol size="auto" className="ion-align-self-start">
                  <div className="todo-icon homework">
                    <IonIcon icon={pencil} />
                  </div>
                </IonCol>
                <IonCol>
                  <IonCardTitle >Answer page 95</IonCardTitle>
                  <IonCardSubtitle>
                  <IonIcon icon={alarmOutline} slot="start" />
                  <span className="due-date">Today ate 9AM</span>
                  <span className="due-subject">Engelsk B</span>
                  </IonCardSubtitle>
                </IonCol>
              </IonRow>
            </IonGrid>
          </IonCard>
          <IonCard className="due-card">
            <IonGrid>
              <IonRow>
                <IonCol size="auto" className="ion-align-self-start">
                  <div className="todo-icon excel">
                    <img className="news-img" src="/assets/excel.png" />
                  </div>
                </IonCol>
                <IonCol>
                  <IonCardTitle >Answer page 95</IonCardTitle>
                  <IonCardSubtitle>
                  <IonIcon icon={alarmOutline} slot="start" />
                  <span className="due-date">Today ate 9AM</span>
                  <span className="due-subject">Engelsk B</span>
                  </IonCardSubtitle>
                </IonCol>
              </IonRow>
            </IonGrid>
          </IonCard>
        </div>
      </section>

      <section className="dashboard-news">
        <h6>News</h6>

        <div className="news-wrapper">
          <IonCard className="news-card">
            <img className="news-img" src="/assets/news.png" />
            <div className="news-desc">
              <p>
                Teaching strategy for distance esdducation under Covid-19 for
                primary
              </p>
              <span className="news-school"><IonIcon className="news-icon" icon={schoolOutline}></IonIcon>School News</span>
              <span className="news-time">1 hour ago</span>
            </div>
          </IonCard>

          <IonCard className="news-card">
            <img className="news-img" src="/assets/news2.png" />
            <div className="news-desc">
              <p>
                Teaching strategy for distance esdducation under Covid-19 for
                primary
              </p>
              <span className="news-school"><IonIcon className="news-icon" icon={schoolOutline}></IonIcon>School News</span>
              <span className="news-time">1 hour ago</span>
            </div>
          </IonCard>
        </div>
      </section>


    </IonContent>
  );
};



export default Dashboard;
