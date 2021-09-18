import React from 'react';
import { usePlayerContext } from '../utils/GlobalState';

const PlayerStats = () => {
  const [state] = usePlayerContext();

  console.log(state)
  
  return (
    <div>
      <h3>{state.playerName}</h3>
      <p>Health: {state.playerHealth}</p>
      <p>Attack: {state.playerAttack}</p>
      <p>Tokens: {state.playerTokens}</p>
    </div>
  )
}

export default PlayerStats;