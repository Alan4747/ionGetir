import { Link, Redirect, Route } from 'react-router-dom';
import {
    IonApp, IonFab, IonFabButton,
    IonIcon,
    IonPopover,
    IonRouterOutlet,
    IonTabBar,
    IonTabButton,
    IonTabs,
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { grid, home, person, search } from 'ionicons/icons';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';
import camp from './assets/svg/camp.svg';

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
import Home from "./pages/Home/Home";
import Search from "./pages/Search/Search";
import Modules from "./pages/Modules/Modules";
import Campaigns from "./pages/Campaigns/Campaigns";
import Profile from "./pages/Profile/Profile";
import './App.css';

const App: React.FC = () => {
    return (
        <IonApp>
            <IonReactRouter>
                <IonTabs>
                    <IonRouterOutlet>
                        <Route exact path="/home">
                            <Home />
                        </Route>
                        <Route exact path="/search">
                            <Search />
                        </Route>
                        <Route path="/modules">
                            <Modules />
                        </Route>
                        <Route path="/profile">
                            <Profile />
                        </Route>
                        <Route path="/campaigns">
                            <Campaigns />
                        </Route>
                        <Route exact path="/">
                            <Redirect to="/home" />
                        </Route>
                    </IonRouterOutlet>
                    <IonTabBar slot="bottom" className={"btn-color"}>
                        <IonTabButton className={"btn-app"} tab="home" href="/home">
                            <IonIcon icon={home} />
                        </IonTabButton>
                        <IonTabButton className={"btn-app search-btn"} tab="search" href="/search">
                            <IonIcon icon={search} />
                        </IonTabButton>
                        <IonTabButton className={"btn-app profile-btn"} tab="profile" href="/profile">
                            <IonIcon icon={person} />
                        </IonTabButton>
                        <IonTabButton className={"btn-app"} tab="campaigns" href="/campaigns">
                            <IonIcon icon={camp} />
                        </IonTabButton>
                    </IonTabBar>
                </IonTabs>

                <IonFab vertical="bottom" horizontal="center" slot="fixed">
                    <Link to={"/home"}>
                        <IonFabButton className={"fab-btn"}>
                            <IonIcon className={"fab-icon"} icon={grid}></IonIcon>
                        </IonFabButton>
                    </Link>
                </IonFab>
            </IonReactRouter>
        </IonApp>
    )
};

export default App;
