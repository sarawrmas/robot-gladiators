import React, { createContext, useContext } from "react";
import { useProductReducer } from "./reducers";

const StoreContext = createContext();
const { Provider } = StoreContext;

const StoreProvider = () => {
  const [state, dispatch] = useProductReducer({
    playerName: '',
    playerHealth: 100,
    playerAttack: 10,
    playerTokens: 10
  });
  return <Provider value={[state, dispatch]} {...props} />
};

const useStoreContext = () => {
  return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };