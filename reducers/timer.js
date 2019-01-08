import { TICK } from "../actionTypes";

const exampleInitialState = {
  lastUpdate: 0,
  light: false
};

export default (state = exampleInitialState, action) => {
  switch (action.type) {
    case TICK:
      return Object.assign({}, state, {
        lastUpdate: action.ts,
        light: !!action.light
      });
    default:
      return state;
  }
};