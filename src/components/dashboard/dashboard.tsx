import React from 'react';
import { IonHeader, IonCard, IonImg, IonGrid, IonRow, IonCol, IonButton, IonToolbar, IonTitle, IonIcon, IonItem, IonLabel} from '@ionic/react';
import { alarmOutline, schoolOutline } from 'ionicons/icons';
import './dashboard.scss';
interface ContainerProps {
  name: string;
}

const Dashboard: React.FC<ContainerProps> = ({ name }) => {
  return (
    <div className="dashboard-wrapper">
      
      <IonCard className="dashboard-header">
        <h6>Hi, Mona</h6>
        <p>We prepare this dashboard to help and guide you all day!</p>
        <span><img src="/assets/greetings-boy.png" /></span>
      </IonCard>

      <IonCard className="dashboard-attendance">
        <h6>95% Attendance</h6>
        <p>Keep it up!</p>
      </IonCard>

      <section className="dashboard-schedule">
        <h6>My Schedule</h6>
        
        <div className="schedule-wrapper">
          <IonCard className="schedule-card">
            <IonGrid>
              <IonRow>
                <IonCol size="7" size-sm>
                  <p>Engelsk B</p>
                  <p>8:00-9:00</p>
                  <IonButton type="button" className="primary --ion-color-primary btn-todo">
                    1 To do
                  </IonButton>
                </IonCol>
                <IonCol size="5" size-sm>
                  <p>Up next</p>
                  <p>R. 302 A</p>
                </IonCol>
              </IonRow>
            </IonGrid>
          </IonCard>
          <IonCard className="schedule-card">
            <IonGrid>
              <IonRow>
                <IonCol size="7" size-sm>
                  <p>Engelsk B</p>
                  <p>8:00-9:00</p>
                  <IonButton type="button" className="primary --ion-color-primary btn-todo">
                    1 To do
                  </IonButton>
                </IonCol>
                <IonCol size="5" size-sm>
                  <p>Up next</p>
                  <p>R. 302 A</p>
                </IonCol>
              </IonRow>
            </IonGrid>
          </IonCard>
          <IonCard className="schedule-card">
            <IonGrid>
              <IonRow>
                <IonCol size="7" size-sm>
                  <p>Engelsk B</p>
                  <p>8:00-9:00</p>
                  <IonButton type="button" className="primary --ion-color-primary btn-todo">
                    1 To do
                  </IonButton>
                </IonCol>
                <IonCol size="5" size-sm>
                  <p>Up next</p>
                  <p>R. 302 A</p>
                </IonCol>
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
              <IonCol size="3" size-sm>
                <IonImg className="due-img" src="/assets/pen.png" />
              </IonCol>
              <IonCol size="9" size-sm>
                <p className="due-title-card">Answer page 95</p>
                <span className="due-date"><span>
                  <IonIcon className="due-icon" icon={alarmOutline}></IonIcon>
                </span>Today ate 9AM</span>
                <span className="due-subject">Engelsk B</span>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonCard>
        <IonCard className="due-card">
          <IonGrid>
            <IonRow>
              <IonCol size="3" size-sm>
                <IonImg className="due-img" src="/assets/excel.png" />
              </IonCol>
              <IonCol size="9" size-sm>
                <p className="due-title-card">Answer page 95</p>
                <span className="due-date"><span>
                  <IonIcon className="due-icon" icon={alarmOutline}></IonIcon>
                </span>Today ate 9AM</span>
                <span className="due-subject">Engelsk B</span>
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


    </div>
    
  );
};



export default Dashboard;
