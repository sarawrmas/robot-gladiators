import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { usePlayerContext } from '../utils/GlobalState';
import { RESET_STATE } from '../utils/actions';
import { Link } from 'react-router-dom';

const QuitGame = () => {
  const [state, dispatch] = usePlayerContext();
  const [showModal, setShowModal] = useState(false);

  const selectQuit = () => {
    setShowModal(true)
  }

  const continueGame = () => {
    setShowModal(false)
  }

  const confirmQuit = () => {
    dispatch({
      type: RESET_STATE
    })
    setShowModal(false)
  }

  return (
      <div>
      <button id="quit-btn" onClick={selectQuit}>Quit</button>
      <Modal show={showModal}>
      <Modal.Body>
        <p>Are you sure you'd like to quit?</p>
        <p>You will forfeit the entire game and lose all progress!</p>
      </Modal.Body>
      <Modal.Footer>
        <button onClick={continueGame}>Return to Game</button>
        <Link to="/"><button onClick={confirmQuit}>Confirm Quit</button></Link>
      </Modal.Footer>
      </Modal>
    </div>
  )
}

export default QuitGame;