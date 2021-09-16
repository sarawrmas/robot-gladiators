import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import PlayerStats from '../components/PlayerStats';

const NameRobot = () => {
  const history = useHistory();
  const [formInput, setFormInput] = useState('');
  const [playerInfo, setPlayerInfo] = useState({
    name: '',
    health: 100,
    attack: 10,
    tokens: 10
  })

  const storeName = (e) => {
    e.preventDefault();
    if (!formInput) {
      alert("You must name your player!");
      return;
    } else {
      setPlayerInfo({...playerInfo, name: formInput})
      setFormInput('');
      history.push('/fight-or-skip')
    }

  }

  return (
    <div id="name-div">
      <h2>What is your player's name?</h2>
      <input id="name-input" value={formInput} onChange={(e) => setFormInput(e.target.value)} />
      <button id="name-btn" onClick={storeName}>SUBMIT</button>
      <PlayerStats playerInfo={playerInfo} setPlayerInfo={setPlayerInfo} />
    </div>
  )
}

export default NameRobot;