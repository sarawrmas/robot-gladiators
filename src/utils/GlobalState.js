import React, { createContext, useContext } from "react";
import { usePlayerReducer } from "./reducers";
// import { randomNumber } from './helpers';
import { initialState } from "./reducers";

const PlayerContext = createContext();
const { Provider } = PlayerContext;

const PlayerProvider = ({ ...props }) => {
  const [state, dispatch] = usePlayerReducer(
    // {
    initialState
    // playerName: '',
    // playerHealth: 100,
    // playerAttack: 10,
    // playerTokens: 10,
    // currentEnemy: 'Roborto',
    // enemyHealth: 50,
    // enemyAttack: 12
    // robortoHealth: randomNumber(40, 60),
    // amyHealth: randomNumber(40, 60),
    // trumbleHealth: randomNumber(40, 60)
  // }
  );
  return <Provider value={[state, dispatch]} {...props} />
};

const usePlayerContext = () => {
  return useContext(PlayerContext);
};

export { PlayerProvider, usePlayerContext };