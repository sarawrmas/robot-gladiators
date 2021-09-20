import React from 'react';
import { useHistory } from 'react-router-dom';

const Skip = () => {
  const history = useHistory();

  setTimeout(() => history.push('/fight'), 3000)

  return (
    <div>
      <h2>You have skipped the match!</h2>
    </div>
  )
}

export default Skip;