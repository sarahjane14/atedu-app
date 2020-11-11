import React, { useState } from 'react';
import { IonHeader, IonCard, IonImg, IonGrid, IonRow, IonCol, IonButton, IonToolbar, IonTitle, IonIcon, IonItem, IonLabel, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonContent, IonActionSheet, IonModal, IonPage, IonAvatar } from '@ionic/react';
import { initializeIcons } from '@uifabric/icons';
import { getIconClassName } from '@uifabric/styling';
import { list, pencil, alarmOutline, schoolOutline, trash, share, caretForwardCircle, heart, pinOutline, timeOutline, checkmarkCircle } from 'ionicons/icons';
import greetingsBoy from '../../assets/images/greetings-boy.png';
import newsOne from '../../assets/images/news.png';
import './dashboard.scss';
initializeIcons();

interface ContainerProps {
  name: string;
}

const Dashboard: React.FC<ContainerProps> = ({ name }) => {

  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <IonContent className="dashboard-wrapper">

        <IonCard className="dashboard-header ion-margin">
          <h5>Hi, Mona</h5>
          <p>We prepare this dashboard to help and guide you all day!</p>
          <IonImg src={greetingsBoy} className="align-self-end" />
        </IonCard>

        <IonCard className="dashboard-attendance ion-margin">
          <h6>95% Attendance</h6>
          <p>Keep it up!</p>
        </IonCard>

        <section className="dashboard-schedule ion-margin">
          <h6>My Schedule</h6>

          <div className="schedule-wrapper ">
            <IonCard className="schedule-card" >
              <IonGrid>
                <IonRow className="ion-align-items-start">
                  <IonCol>
                    <IonCardTitle >Engelsk B</IonCardTitle>
                  </IonCol>
                  <IonCol className="ion-align-self-end " size="auto">
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
                  <IonButton type="button" color="primary" onClick={() => setShowModal(true)}>
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
              <IonImg className="news-img" src={newsOne} />
              {/* <img  src="/assets/news.png" /> */}
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
                <span className="news-school">
                  <IonIcon className="news-icon" icon={schoolOutline}></IonIcon>
                School News
              </span>
                <span className="news-time">1 hour ago</span>
              </div>
            </IonCard>
          </div>
        </section>

        <IonModal isOpen={showModal} cssClass='my-custom-class ion-align-items-start' >
          <div>
            <IonCard color="transparent">
              <IonCardHeader>
                <IonGrid>
                  <IonRow>
                    <IonCol size="auto">
                      <div className="mini-date align-self-start">
                        <span className="month">OCT</span>
                        <span className="day">
                          <span>08</span></span>
                      </div>
                    </IonCol>
                    <IonCol>
                      <IonRow>
                        <IonCol>
                          <IonCardTitle> Engelsk</IonCardTitle>
                        </IonCol>
                      </IonRow>
                      <IonRow className="ion-align-items-end">
                        <IonCol>
                          <IonCardSubtitle>
                            <IonIcon icon={timeOutline} /> 8:00-9:00
                              </IonCardSubtitle>
                          <IonCardSubtitle>
                            <IonIcon icon={pinOutline} /> R. 302 A
                            </IonCardSubtitle>
                        </IonCol>
                        <IonCol size="auto">
                          <IonCardSubtitle className="ion-align-self-end">
                            <i className={`fl-icon ${getIconClassName('SkypeCircleClock')}`}></i>
                                Up next
                              </IonCardSubtitle>
                        </IonCol>
                      </IonRow>
                    </IonCol>
                  </IonRow>
                </IonGrid>
              </IonCardHeader>
            </IonCard>
            <IonCard color="transparent">
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
                      <IonIcon icon={alarmOutline} /> Today at 9AM
                    </IonCardSubtitle>
                  </IonCol>
                </IonRow>
              </IonGrid>
            </IonCard>
            <IonCard color="transparent">
              <IonGrid>
                <IonRow>
                  <IonCol size="auto" className="ion-align-self-start">
                    <div className="at-persona">
                      <IonAvatar slot="start">
                        <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" />
                        <IonIcon icon={checkmarkCircle} color="success"></IonIcon>
                      </IonAvatar>
                    </div>
                  </IonCol>
                  <IonCol>
                    <IonCardSubtitle>
                      “No late comers allowed! Bring your English 101 Book. Please study the attached file.”
                    </IonCardSubtitle>
                  </IonCol>
                </IonRow>
              </IonGrid>
            </IonCard>
          </div>
          <div>
            <IonButton expand="block" onClick={() => setShowModal(false)}>Go to Subject page</IonButton>
            <IonButton expand="block"onClick={() => setShowModal(false)}>Close</IonButton>
          </div>
        </IonModal>
      </IonContent>
    </>
  );
};



export default Dashboard;
