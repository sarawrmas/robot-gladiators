import React from 'react';
import { useHistory } from 'react-router-dom';

const Welcome = () => {
  const history = useHistory();

  const startGame = () => {
    history.push('/name');
  }

  return (
  <div>
    <img src="images/player1.png" /><br />
    <button onClick={startGame}>Start Game</button>
  </div>
  )
}

export default Welcome;