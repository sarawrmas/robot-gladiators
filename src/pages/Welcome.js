import React from 'react';
import { useHistory } from 'react-router-dom';

const Welcome = () => {
  const history = useHistory();

  setTimeout(() => {
    history.push('/name');
  }, 3000)

  return (
  <div>
    <h1 className="header"> Welcome</h1>
    <img src="images/player1.png" />
    <p>Loading...</p>
  </div>
  )
}

export default Welcome;