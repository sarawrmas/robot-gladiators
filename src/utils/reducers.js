export const UPDATE_PLAYER_NAME = "UPDATE_PLAYER_NAME";
export const UPDATE_PLAYER_HEALTH = "UPDATE_PLAYER_HEALTH";
export const UPDATE_PLAYER_ATTACK = "UPDATE_PLAYER_ATTACK";
export const UPDATE_PLAYER_TOKENS = "UPDATE_PLAYER_TOKENS";

import { useReducer } from 'react';

export const reducer = (state, action) => {
  switch (action.type) {
    case UPDATE_PLAYER_NAME:
      return {
        ...state,
        playerName: [...action.playerName]
      };

    case UPDATE_PLAYER_HEALTH:
      return {
        ...state,
        playerHealth: [...action.playerHealth]
      };

    case UPDATE_PLAYER_ATTACK:
      return {
        ...state,
        playerAttack: [...action.playerAttack]
      };

    case UPDATE_PLAYER_TOKENS:
      return {
        ...state,
        playerTokens: [...action.playerTokens]
      };

    default:
      return state;
  }
};

export function useProductReducer(initialState) {
  return useReducer(reducer, initialState);
};