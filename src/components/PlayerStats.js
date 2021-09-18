import React from 'react';
import { usePlayerContext } from '../utils/GlobalState';

const PlayerStats = () => {
  const [state] = usePlayerContext();

  console.log(state)
  
  return (
    <div>
      <div className="playerStats">
        <h3>{state.playerName}</h3>
        <p>Health: {state.playerHealth}</p>
        <p>Attack: {state.playerAttack}</p>
        <p>Tokens: {state.playerTokens}</p>
      </div>
      {/* <div className="robortoStats">
        <h3>Roborto</h3>
        <p>Health: {state.robortoHealth}</p>
        <p>Attack: {state.robortoAttack}</p>
      </div>
      <div className="amyAndroidStats">
        <h3>Amy Android</h3>
        <p>Health: {state.amyHealth}</p>
        <p>Attack: {state.amyAttack}</p>
      </div>
      <div className="roboTrumbleStats">
        <h3>Robo Trumble</h3>
        <p>Health: {state.trumbleHealth}</p>
        <p>Attack: {state.trumbleAttack}</p>
      </div> */}
    </div>
  )
}

export default PlayerStats;