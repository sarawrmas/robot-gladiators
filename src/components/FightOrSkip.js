import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Modal } from 'react-bootstrap';
import { usePlayerContext } from '../utils/GlobalState';
import { UPDATE_PLAYER_TOKENS } from '../utils/actions';


const FightOrSkip = () => {
  const history = useHistory();
  const [showModal, setShowModal] = useState(false);
  const [state, dispatch] = usePlayerContext();

  const continueMatch = () => {
    setShowModal(false)
  }

  const skipMatch = () => {
    dispatch({type: UPDATE_PLAYER_TOKENS, playerTokens: state.playerTokens - 10})
    setShowModal(false)
    history.push('/skip')
  }

  const selectSkip = () => {
    setShowModal(true)
  }

  const fightMatch = () => {
    setShowModal(false)
    history.push('/attack')
  }

  return (
    <div id="fight-or-skip">
      {/* <h2>Would you like to FIGHT or SKIP this battle?</h2> */}
      <button onClick={fightMatch}>FIGHT</button>
      <button onClick={selectSkip}>SKIP</button>
      <Modal show={showModal}>
        {state.playerTokens >= 10 ? (
          <div>
            <Modal.Body>
              <p>Are you sure you want to skip?</p>
              <p>Skipping forfeits the match and deducts 10 tokens!</p>
            </Modal.Body>
            <Modal.Footer>
              <button onClick={skipMatch}>CONTINUE SKIP</button>
              <button onClick={continueMatch}>RETURN TO MATCH</button>
            </Modal.Footer>
          </div>
        ) : (
          <div>
            <Modal.Body>
              <p>You do not have enough tokens!</p>
            </Modal.Body>
            <Modal.Footer>
              <button onClick={continueMatch}>RETURN TO MATCH</button>
            </Modal.Footer>
          </div>
        )}
      </Modal>
    </div>
  )
}

export default FightOrSkip;