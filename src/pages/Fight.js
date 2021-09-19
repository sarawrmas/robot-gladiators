import React, { useEffect } from 'react';
import { usePlayerContext } from '../utils/GlobalState';
import { UPDATE_CURRENT_ENEMY, UPDATE_PLAYER_HEALTH } from '../utils/actions';
import { useHistory } from 'react-router-dom';
import FightOrSkip from '../components/FightOrSkip';
import PlayerStats from '../components/PlayerStats';

const Fight = () => {
  const [state, dispatch] = usePlayerContext();
  const history = useHistory();
  // const [roundNum, setRoundNum] = useState(1);

  console.log(state)

  useEffect(() => {
    fight()
  }, [])

  const enemies = [
    {
      name: "Roborto",
      img: "roborto.png",
      attacked: "roborto-attacked.png",
      dead: "roborto-dead.png"
    },
    {
      name: "Amy Android",
      img: "amy.png",
      attacked: "amy-attacked.png",
      dead: "amy-dead.png"
    },
    {
      name: "Robo Trumble",
      img: "trumble.png",
      attacked: "trumble-attacked.png",
      dead: "trumble-dead.png"
    }
  ]

  const fight = () => {
    if (state.enemyHealth <= 0) {
      // dispatch({
      //   type: UPDATE_CURRENT_ENEMY, enemyName: enemies[1]
      // })

      setTimeout(() => {
        history.push("/shop")
      }, 5000)
      
    } else if (state.playerHealth <= 0) {
      setTimeout(() => {
        history.push("/endgame")
      }, 5000)
    }
  }

  return (
    <div>
      {state.playerHealth > 0 && state.enemyHealth > 0 ? (
        <div>
          <PlayerStats />
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
              <h2>How did I get here?</h2>
            </div>
          )
        )
      )}
    </div>
  )
}

export default Fight;