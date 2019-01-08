import {
  TICK,
  INCREMENT,
  DECREMENT,
  RESET,
  SWITCH_CHARACTER,
  FETCH_CHARACTER,
  FETCH_CHARACTERS_START,
  FETCH_CHARACTERS_SUCCESS,
  FETCH_CHARACTERS_FAILTURE
} from "../actionTypes";

import { fetchCharacters as fetchCharactersApi } from '../api'
// ACTIONS
export const serverRenderClock = isServer => dispatch => {
  return dispatch({ type: TICK, light: !isServer, ts: Date.now() });
};

export const startClock = dispatch => {
  return setInterval(() => {
    // Dispatch `TICK` every 1 second
    dispatch({ type: TICK, light: true, ts: Date.now() });
  }, 1000);
};

export const incrementCount = () => dispatch => {
  return dispatch({ type: INCREMENT });
};

export const decrementCount = () => dispatch => {
  return dispatch({ type: DECREMENT });
};

export const resetCount = () => dispatch => {
  return dispatch({ type: RESET });
};

export const switchCharacter = () => dispatch => {
  return dispatch({ type: SWITCH_CHARACTER });
};

export const fetchCharacter = (id) => dispatch => {
  return dispatch( {type: FETCH_CHARACTER, id })
}
export const fetchCharacters = () => async dispatch => {
  dispatch({ type: FETCH_CHARACTERS_START });
  try {
    const characters = await fetchCharactersApi();
    dispatch({
      type: FETCH_CHARACTERS_SUCCESS,
      payload: characters
    });
  } catch (err) {
    dispatch({
      type: FETCH_CHARACTERS_FAILTURE,
      payload: err,
      error: true
    });
  }
};

