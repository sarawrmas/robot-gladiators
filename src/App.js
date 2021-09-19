import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { PlayerProvider } from './utils/GlobalState';
import Welcome from './pages/Welcome';
import NameRobot from './pages/NameRobot';
import Fight from './pages/Fight';
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
            <Route exact path="/" component={Welcome} />
            <Route exact path="/name" component={NameRobot} />
            <Route>
              <h1 className="header">Robot Gladiators</h1>
              <QuitGame />
              <Switch>
                <Route exact path="/fight" component={Fight} />
                <Route exact path="/skip" component={Skip} />
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