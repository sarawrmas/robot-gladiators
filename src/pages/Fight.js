import React, { useEffect, useRef } from 'react';
import { usePlayerContext } from '../utils/GlobalState';
import {
  UPDATE_PLAYER_HEALTH,
  UPDATE_ENEMY_HEALTH
} from '../utils/actions';

const Fight = () => {
  const [state, dispatch] = usePlayerContext();

  // const attackInterval = useRef(-1);

  // const attackEnemy = () => {
  //   attackInterval.current = setTimeout(() => {
  //     dispatch({
  //       type: UPDATE_ENEMY_HEALTH,
  //       enemyHealth: state.enemyHealth - state.playerAttack
  //     })
  //   }, 3000)
  // }

  const damageInterval = useRef(-1);

  const takeDamage = () => {
    damageInterval.current = setTimeout(() => {
      dispatch({
        type: UPDATE_PLAYER_HEALTH,
        playerHealth: state.playerHealth - state.enemyAttack
      })
    }, 6000)
  }

  useEffect(() =>  takeDamage(), [])

  return (
    <div>
      <h2>Commence fight!</h2>
    </div>
  )

  // return (
  //   <div>
  //     <h2>{state.playerName} has attacked Roborto!</h2>
  //   </div>
  // )
}

export default Fight;