import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { usePlayerContext } from '../utils/GlobalState';
import ShopModal from '../components/ShopModal';

const Shop = () => {
  const [state] = usePlayerContext();
  const [showModal, setShowModal] = useState(false);
  const [upgradeChoice, setUpgradeChoice] = useState('');

  const openModal = (choice) => {
    setShowModal(true)
    setUpgradeChoice(choice)
  }

  return (
    <div>
      <h2>Shop</h2>
      <h3>Health: {state.playerHealth}</h3>
      <h3>Attack: {state.playerAttack}</h3>
      <h3>Tokens: {state.playerTokens}</h3>
      <Container>
        <Row>
          <Col>
            <h3>Upgrade Health</h3>
            <OverlayTrigger placement="bottom" overlay={
              <Tooltip id="tooltip-disabled">
                <div>
                  <p>Health</p>
                  <p>Cost: 7 tokens</p>
                  <p>Health: +20</p>
                </div>
              </Tooltip>
            }>
              <div>
                <img className="pow" src="../images/upgrade-health.png" onClick={() => openModal("Health")} />
              </div>
            </OverlayTrigger>
          </Col>
          <Col>
            <h3>Upgrade Attack</h3>
            <OverlayTrigger placement="bottom" overlay={
              <Tooltip id="tooltip-disabled">
                <div>
                  <p>Attack</p>
                  <p>Cost: 7 tokens</p>
                  <p>Attack: +6</p>
                </div>
              </Tooltip>
            }>
              <div>
                <img className="pow" src="../images/upgrade-attack.png" onClick={() => openModal("Attack")}/>
              </div>
            </OverlayTrigger>
          </Col>
        </Row>
      </Container>
      <ShopModal showModal={showModal} setShowModal={setShowModal} upgradeChoice={upgradeChoice} />
      <Link to="/fight"><button>Return to Game</button></Link>
    </div>
  )
};

export default Shop;