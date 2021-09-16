import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Modal } from 'react-bootstrap';

const FightOrSkip = () => {
  const history = useHistory();
  const [showModal, setShowModal] = useState(false);

  const continueMatch = () => {
    setShowModal(false)
  }

  const skipMatch = () => {
    console.log("Match skipped")
    setShowModal(false)
    history.push('/skip')
  }

  const selectSkip = () => {
    setShowModal(true)
  }

  return (
    <div id="fight-or-skip">
      <h2>Would you like to FIGHT or SKIP this battle?</h2>
      <button>FIGHT</button>
      <button onClick={selectSkip}>SKIP</button>
      <Modal show={showModal}>
        <Modal.Body>
          <p>Are you sure you want to skip?</p>
          <p>Skipping forfeits the match and deducts 10 tokens!</p>
        </Modal.Body>
        <Modal.Footer>
          <button onClick={skipMatch}>CONTINUE SKIP</button>
          <button onClick={continueMatch}>RETURN TO MATCH</button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default FightOrSkip;