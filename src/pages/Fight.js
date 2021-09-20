import React, { useEffect } from 'react';
import { usePlayerContext } from '../utils/GlobalState';
import { UPDATE_CURRENT_ENEMY } from '../utils/actions';
import { useHistory } from 'react-router-dom';
import FightOrSkip from '../components/FightOrSkip';
import PlayerStats from '../components/PlayerStats';
import { Link } from 'react-router-dom';

const Fight = () => {
  const [state, dispatch] = usePlayerContext();
  const history = useHistory();

  const fight = () => {
    if (state.playerHealth > 0 && state.enemyHealth > 0) {
      console.log("FIGHT")
    } else if (state.enemyHealth <= 0 && state.enemyName !== "Cyberion") {
      updateEnemy();
      history.push("/defeat")
    } else {
      history.push("/endgame")
    }
  }

  useEffect(() => {
    fight()
  })

  const enemies = [
    {
      name: "Roborto",
      img: 'images/roborto.png'
    },
    {
      name: "Androida",
      img: "images/androida.png"
    },
    {
      name: "Cyberion",
      img: "images/cyberion.png"
    }
  ];

  var currentEnemyIndex = enemies.findIndex(enemy => enemy.name === state.enemyName)

  const updateEnemy = () => {
    dispatch({
      type: UPDATE_CURRENT_ENEMY, enemyName: enemies[currentEnemyIndex + 1]
    })
  }

  return (
    <div>
      {state.playerHealth > 0 && state.enemyHealth > 0 ? (
        <div>
          <PlayerStats enemies={enemies} currentEnemyIndex={currentEnemyIndex} />
          <FightOrSkip />
        </div>
      ) : (
        state.enemyHealth <= 0 ? (
          <div>
            <h2>You have defeated {state.enemyName}!</h2>
            <p>Redirecting to shop...</p>
          </div>
        ) : (
          state.playerHealth <= 0 ? (
            <div>
              <h2>You have died!</h2>
              <p>Let's see how you did...</p>
            </div>
          ) : (
            <div>
              <h2>Error...</h2>
              <Link to="/"><button>Home</button></Link>
            </div>
          )
        )
      )}
    </div>
  )
}

export default Fight;