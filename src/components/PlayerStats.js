import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { usePlayerContext } from '../utils/GlobalState';

const PlayerStats = () => {
  const [state] = usePlayerContext();
  
  return (
    <div>
      <h2>ROUND 1</h2>
      <Container>
        <Row>
          <Col>
            <div className="playerStats">
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
            <h3>Roborto</h3>
            <img src ="images/roborto.png" />
            <p>Health: 50</p>
            <p>Attack: 12</p>
          </Col>
        </Row>
      </Container>
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