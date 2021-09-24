import React from 'react';
import { usePlayerContext } from '../utils/GlobalState';
import { Link } from 'react-router-dom';

const Defeat = () => {
  const [state, dispatch] = usePlayerContext();

  return (
    <div>
      <h1>{state.enemyName} has died!</h1>
      <img src={`images/${state.enemyName.toLowerCase()}-dead.png`} alt="" />
      <h2>Would you like to...</h2>
      <Link to="/shop"><button>Visit Shop</button></Link>
      <Link to="/fight"><button>Return to Game</button></Link>
    </div>
  )
}

export default Defeat;