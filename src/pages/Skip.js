import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const Skip = () => {
  const history = useHistory();

  // useEffect(() => {
    setTimeout(() => history.push('/fight-or-skip'), 3000)
  // })
  return (
    <div>
      <h2>You have skipped the match!</h2>
    </div>
  )
}

export default Skip;