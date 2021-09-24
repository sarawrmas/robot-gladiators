import React, { createContext, useContext } from "react";
import { usePlayerReducer } from "./reducers";
import { initialState } from "./reducers";

const PlayerContext = createContext();
const { Provider } = PlayerContext;

const PlayerProvider = ({ ...props }) => {
  const [state, dispatch] = usePlayerReducer(initialState);
  return <Provider value={[state, dispatch]} {...props} />
};

const usePlayerContext = () => {
  return useContext(PlayerContext);
};

export { PlayerProvider, usePlayerContext };