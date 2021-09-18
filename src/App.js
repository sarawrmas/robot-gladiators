import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { PlayerProvider } from './utils/GlobalState';
import NameRobot from './pages/NameRobot';
import FightOrSkip from './components/FightOrSkip';
import PlayerStats from './components/PlayerStats';
// import Fight from './pages/Fight';
import Skip from './pages/Skip';

function App() {
  return (

      <div>
        <h1 className="header">Robot Gladiators</h1>
          <Router>
            <div>
            <PlayerProvider>
            <PlayerStats />
            <Switch>
            <Route exact path="/" component = {NameRobot} />
              <Route exact path="/fight-or-skip" component = {FightOrSkip} />
              {/* <Route exact path="/fight" component = {Fight} /> */}
              <Route exact path="/skip" component = {Skip} />
            </Switch>
            </PlayerProvider>
            </div>
            
          </Router>
      </div>

  );
}

export default App;