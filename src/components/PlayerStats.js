import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { usePlayerContext } from '../utils/GlobalState';

const PlayerStats = (props) => {
  const [state, dispatch] = usePlayerContext();

  const { enemies, currentEnemyIndex } = props;

  const printEnemyInfo = () => {
    return enemies.filter(
      enemy => enemy.name === state.enemyName
    )
  }

  return (
    <div>
      <h2>ROUND {currentEnemyIndex + 1}</h2>
      <Container>
        <Row>
          <Col>
            <div>
              <h3>{state.playerName}</h3>
              <img src="images/player1.png" />
              <p>Health: {state.playerHealth}</p>
              <p>Attack: {state.playerAttack}</p>
              <p>Tokens: {state.playerTokens}</p>
            </div>
          </Col>
          <Col>
            <h3>VS.</h3>
          </Col>
          <Col>
            {printEnemyInfo().map((enemy) => (
              <div key={enemies.indexOf(enemy)}>
                <h3>{enemy.name}</h3>
                <img src={enemy.img} />
              </div>
            ))}
            <p>Health: {state.enemyHealth}</p>
            <p>Attack: {state.enemyAttack}</p>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default PlayerStats;