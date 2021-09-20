import React from 'react';
import { Modal } from 'react-bootstrap';
import { usePlayerContext } from '../utils/GlobalState';
import {
  UPDATE_PLAYER_TOKENS,
  UPDATE_PLAYER_HEALTH,
  UPDATE_PLAYER_ATTACK
} from '../utils/actions';

const ShopModal = (props) => {
  const [state, dispatch] = usePlayerContext();
  const { showModal, setShowModal, upgradeChoice } = props;

  const closeModal = () => {
    setShowModal(false)
  }

  const upgrade = () => {
    if (upgradeChoice === "Health") {
      dispatch({
        type: UPDATE_PLAYER_HEALTH,
        playerHealth: state.playerHealth + 20
      });
    } else if (upgradeChoice === "Attack") {
      dispatch({
        type: UPDATE_PLAYER_ATTACK,
        playerAttack: state.playerAttack + 6
      });
    }
    
    dispatch({
      type: UPDATE_PLAYER_TOKENS,
      playerTokens: state.playerTokens - 7
    });

    setShowModal(false)
  }

  return (
    <div>
      <Modal show={showModal}>
        {state.playerTokens >= 7 ? (
          <div>
            <Modal.Body>
              <p>Upgrade {upgradeChoice.toLowerCase()} for 7 tokens?</p>
            </Modal.Body>
            <Modal.Footer>
              <button onClick={upgrade}>Upgrade</button>
              <button onClick={closeModal}>Close</button>
            </Modal.Footer>
          </div>
        ) : (
          <div>
            <Modal.Body>
              <p>You don't have enough tokens!</p>
            </Modal.Body>
            <Modal.Footer>
              <button onClick={closeModal}>Close</button>
            </Modal.Footer>
          </div>
        )}
      </Modal>
    </div>
  )
}

export default ShopModal;