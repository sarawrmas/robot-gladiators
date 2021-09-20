import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { PlayerProvider } from './utils/GlobalState';
import NameRobot from './pages/NameRobot';
import Attack from './pages/Attack';
import Fight from './pages/Fight';
import Defeat from './pages/Defeat';
import Skip from './pages/Skip';
import QuitGame from './components/QuitGame';
import Shop from './pages/Shop';
import EndGame from './pages/EndGame';

function App() {
  return (
    <div>
      <Router>
        <div>
        <PlayerProvider>
          <Switch>
            <Route>
              <h1 className="header">Robot Gladiators</h1>
              <QuitGame />
              <Switch>
                <Route exact path="/" component={NameRobot} />
                <Route exact path="/fight" component={Fight} />
                <Route exact path="/skip" component={Skip} />
                <Route exact path="/attack" component={Attack} />
                <Route exact path="/defeat" component={Defeat} />
                <Route exact path="/shop" component={Shop} />
                <Route exact path="/endgame" component={EndGame} />
              </Switch>
            </Route>
          </Switch>
        </PlayerProvider>
        </div>
      </Router>
    </div>
  );
}

export default App;