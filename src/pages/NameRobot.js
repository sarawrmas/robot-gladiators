import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { usePlayerContext } from '../utils/GlobalState';
import { UPDATE_PLAYER_NAME } from '../utils/actions';

const NameRobot = () => {
  const history = useHistory();
  const [formInput, setFormInput] = useState('');
  const [state, dispatch] = usePlayerContext();

  const namePlayer = (e) => {
    e.preventDefault();
    if (!formInput) {
      alert("You must name your player!");
      return;
    } else {
      dispatch({type: UPDATE_PLAYER_NAME, playerName: formInput})
      setFormInput('');
      history.push('/fight-or-skip')
    }
  }

  return (
    <div id="name-div">
      <h2>What is your player's name?</h2>
      <input id="name-input" value={formInput} onChange={(e) => setFormInput(e.target.value)} />
      <button id="name-btn" onClick={namePlayer}>SUBMIT</button>
    </div>
  )
}

export default NameRobot;