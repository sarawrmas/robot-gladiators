import React, { createContext, useContext } from "react";
import { usePlayerReducer } from "./reducers";

const PlayerContext = createContext();
const { Provider } = PlayerContext;

const PlayerProvider = ({ ...props }) => {
  const [state, dispatch] = usePlayerReducer({
    playerName: '',
    playerHealth: 100,
    playerAttack: 10,
    playerTokens: 10
  });
  return <Provider value={[state, dispatch]} {...props} />
};

const usePlayerContext = () => {
  return useContext(PlayerContext);
};

export { PlayerProvider, usePlayerContext };