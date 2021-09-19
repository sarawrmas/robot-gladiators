import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { usePlayerContext } from '../utils/GlobalState';

const PlayerStats = () => {
  const [state, dispatch] = usePlayerContext();

  return (
    <div>
      <h2>ROUND 1</h2>
      {/* <h2>ROUND {roundNum}</h2> */}
      <Container>
        <Row>
          <Col>
            <div>
              <h3>{state.playerName}</h3>
              <img src="images/player1.png" />
              {/* <img src="svg/player1.svg" /> */}
              <p className="player-stat">Health: {state.playerHealth}</p>
              <p className="player-stat">Attack: {state.playerAttack}</p>
              <p className="player-stat">Tokens: {state.playerTokens}</p>
            </div>
          </Col>
          <Col>
            <h3>VS.</h3>
          </Col>
          <Col>
            <h3>{state.enemyName}</h3>
            <img src ="images/roborto.png" />
            {/* <img src ="svg/roborto.svg" /> */}
            <p>Health: {state.enemyHealth}</p>
            <p>Attack: {state.enemyAttack}</p>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default PlayerStats;