import { useReducer } from 'react';

import {
  UPDATE_PLAYER_NAME,
  UPDATE_PLAYER_HEALTH,
  UPDATE_PLAYER_ATTACK,
  UPDATE_PLAYER_TOKENS,
  UPDATE_CURRENT_ENEMY,
  UPDATE_ENEMY_HEALTH,
  RESET_STATE
} from './actions';

export const initialState = {
  playerName: '',
  playerHealth: 100,
  playerAttack: 10,
  playerTokens: 10,
  enemyName: 'Roborto',
  enemyHealth: 50,
  enemyAttack: 12
}

export const reducer = (state, action) => {
  switch (action.type) {
    case UPDATE_PLAYER_NAME:
      return {
        ...state,
        playerName: action.playerName
      };

    case UPDATE_PLAYER_HEALTH:
      return {
        ...state,
        playerHealth: action.playerHealth
      };

    case UPDATE_PLAYER_ATTACK:
      return {
        ...state,
        playerAttack: action.playerAttack
      };

    case UPDATE_PLAYER_TOKENS:
      return {
        ...state,
        playerTokens: action.playerTokens
      };
    
    case UPDATE_CURRENT_ENEMY:
      return {
        ...state,
        enemyName: action.enemyName,
        enemyHealth: 50,
        enemyAttack: 12
      };

    case UPDATE_ENEMY_HEALTH:
      return {
        ...state,
        enemyName: state.enemyName,
        enemyHealth: action.enemyHealth
      }

    case RESET_STATE:
      return {
        playerName: '',
        playerHealth: 100,
        playerAttack: 10,
        playerTokens: 10,
        enemyName: 'Roborto',
        enemyHealth: 50,
        enemyAttack: 12
      }

    default:
      return state;
  }
};

export function usePlayerReducer(initialState) {
  return useReducer(reducer, initialState);
};