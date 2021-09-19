import React, { useEffect } from 'react';
import { usePlayerContext } from '../utils/GlobalState';
import { UPDATE_ENEMY_HEALTH } from '../utils/actions';

const PlayerAttack = () => {
  const [state, dispatch] = usePlayerContext();

  const attackEnemy = () => {
    dispatch({
      type: UPDATE_ENEMY_HEALTH,
      enemyHealth: state.enemyHealth - state.playerAttack
    })
  }

  useEffect(() =>  attackEnemy(), [])

  return (
    <div>
      <h2>{state.playerName} has attacked {state.enemyName}!</h2>
    </div>
  )
}

export default PlayerAttack;