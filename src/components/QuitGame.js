import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Modal } from 'react-bootstrap';
import { usePlayerContext } from '../utils/GlobalState';
import { RESET_STATE } from '../utils/actions';

const QuitGame = () => {
  const [state, dispatch] = usePlayerContext();
  const history = useHistory();
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
    history.push('/name')
  }

  return (
      <div>
      <button onClick={selectQuit}>Quit</button>
      <Modal show={showModal}>
      <Modal.Body>
        <p>Are you sure you'd like to quit?</p>
        <p>You will forfeit the entire game and lose all progress!</p>
      </Modal.Body>
      <Modal.Footer>
        <button onClick={continueGame}>Return to Game</button>
        <button onClick={confirmQuit}>Confirm Quit</button>
      </Modal.Footer>
      </Modal>
    </div>
  )
}

export default QuitGame;