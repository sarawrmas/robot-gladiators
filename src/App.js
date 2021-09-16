import React from 'react';
// import './index.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NameRobot from './pages/NameRobot';
import FightOrSkip from './components/FightOrSkip';
import PlayerStats from './components/PlayerStats';
import Fight from './pages/Fight';
import Skip from './pages/Skip';

function App() {
  return (
    <div>
      <h1 className="header">Robot Gladiators</h1>
      <Router>
        <>
        <Switch>
        <Route exact path="/" component = {NameRobot} />
          <Route exact path="/fight-or-skip" component = {FightOrSkip} />
          {/* <Route exact path="/fight" component = {Fight} /> */}
          <Route exact path="/skip" component = {Skip} />
        </Switch>
        </>
      </Router>
    </div>
  );
}

export default App;