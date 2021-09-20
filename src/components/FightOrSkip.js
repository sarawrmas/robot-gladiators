import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { usePlayerContext } from '../utils/GlobalState';
import { UPDATE_PLAYER_TOKENS } from '../utils/actions';
import { Link } from 'react-router-dom';

const FightOrSkip = () => {
  const [showModal, setShowModal] = useState(false);
  const [state, dispatch] = usePlayerContext();

  const continueMatch = () => {
    setShowModal(false)
  }

  const skipMatch = () => {
    dispatch({type: UPDATE_PLAYER_TOKENS, playerTokens: state.playerTokens - 10})
    setShowModal(false)
  }

  const selectSkip = () => {
    setShowModal(true)
  }

  const fightMatch = () => {
    setShowModal(false)
  }

  return (
    <div id="fight-or-skip">
      {/* <h2>Would you like to FIGHT or SKIP this battle?</h2> */}
      <Link to="/attack"><button onClick={fightMatch}>FIGHT</button></Link>
      <button onClick={selectSkip}>SKIP</button>
      <Modal show={showModal}>
        {state.playerTokens >= 10 ? (
          <div>
            <Modal.Body>
              <p>Are you sure you want to skip?</p>
              <p>Skipping forfeits the match and deducts 10 tokens!</p>
              <Link to="/skip"><button onClick={skipMatch}>CONFIRM SKIP</button></Link>
              <button onClick={continueMatch}>CANCEL</button>
            </Modal.Body>
          </div>
        ) : (
          <div>
            <Modal.Body>
              <p>You do not have enough tokens!</p>
              <button onClick={continueMatch}>CANCEL</button>
            </Modal.Body>
          </div>
        )}
      </Modal>
    </div>
  )
}

export default FightOrSkip;