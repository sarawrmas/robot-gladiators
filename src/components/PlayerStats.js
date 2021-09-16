import React from 'react';

const PlayerStats = (props) => {
  const { playerInfo, setPlayerInfo } = props
  return (
    <div>
      <h3 id="playerName">{playerInfo.name}</h3>
      <p id="playerHealth">Health: {playerInfo.health}</p>
      <p id="playerAttack">Attack: {playerInfo.attack}</p>
      <p id="playerTokens">Tokens: {playerInfo.tokens}</p>
    </div>
  )
}

export default PlayerStats;