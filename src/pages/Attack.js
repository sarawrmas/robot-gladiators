import React, { useState, useEffect } from 'react';
import { usePlayerContext } from '../utils/GlobalState';
import { UPDATE_ENEMY_HEALTH, UPDATE_PLAYER_HEALTH } from '../utils/actions';
import { useHistory } from 'react-router-dom';
import {Container, Row, Col} from 'react-bootstrap';

const Attack = () => {
  const [state, dispatch] = usePlayerContext();
  const history = useHistory();
  const [playerTurn, setPlayerTurn] = useState(true);

  const attackEnemy = () => {
    dispatch({
      type: UPDATE_ENEMY_HEALTH,
      enemyHealth: state.enemyHealth - state.playerAttack
    })
  }

  const takeDamage = () => {
    dispatch({
      type: UPDATE_PLAYER_HEALTH,
      playerHealth: state.playerHealth - state.enemyAttack
    });

    setTimeout(() => {
      if (state.enemyHealth > 0) {
        history.push('/fight')
      }
    }, 3000)
  }

  useEffect(() => {
    attackEnemy();
    setTimeout(() => {
      setPlayerTurn(false);
      takeDamage();
    }, 3000)
  }, [])

  return (
    <div>
      {playerTurn ? (
        <div>
          <h2>{state.playerName} has attacked {state.enemyName}!</h2>
          <Container>
            <Row>
              <Col>
                <img src="../images/player1.png" alt="" />
              </Col>
              <Col>
                <img className="pow" src="../images/player-attack-pow.png" alt="" />
              </Col>
              <Col>
                <img src={`../images/${state.enemyName.toLowerCase()}-attacked.png`} alt="" />
                <h3 className="danger">{state.playerAttack} Damage!</h3>
              </Col>
            </Row>
          </Container>
        </div>
      ) : (
        !playerTurn ? (
        <div>
          <h2>{state.enemyName} has attacked {state.playerName}!</h2>
          <Container>
            <Row>
              <Col>
                <img src="../images/player1attacked.png" alt="" />
                <h3 className="danger">{state.enemyAttack} Damage!</h3>
              </Col>
              <Col>
                <img className="pow" src="../images/enemy-attack-pow.png" alt="" />
              </Col>
              <Col>
                <img src={`../images/${state.enemyName.toLowerCase()}.png`} alt="" />
              </Col>
            </Row>
          </Container>
        </div>
        ) : state.enemyHealth <= 0 ? (
          <div>Boohoo</div>
        ) : (
          <div>Error</div>
        )
      )}
    </div>
  )
}

export default Attack;