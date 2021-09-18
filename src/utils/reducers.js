import { useReducer } from 'react';

import {
  UPDATE_PLAYER_NAME,
  UPDATE_PLAYER_HEALTH,
  UPDATE_PLAYER_ATTACK,
  UPDATE_PLAYER_TOKENS,
  UPDATE_CURRENT_ENEMY
  // UPDATE_ROBORTO_HEALTH,
  // UPDATE_AMY_HEALTH,
  // UPDATE_TRUMBLE_HEALTH
} from './actions';

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
        currentEnemy: action.currentEnemy
      }
    
    // case UPDATE_ROBORTO_HEALTH:
    //   return {
    //     ...state,
    //     robortoHealth: action.robortoHealth
    //   };
    
    // case UPDATE_AMY_HEALTH:
    //   return {
    //     ...state,
    //     amyHealth: action.amyHealth
    //   };
    
    // case UPDATE_TRUMBLE_HEALTH:
    //   return {
    //     ...state,
    //     trumbleHealth: action.trumbleHealth
    //   };

    default:
      return state;
  }
};

export function usePlayerReducer(initialState) {
  return useReducer(reducer, initialState);
};