import { combineReducers } from 'redux'
import { routerReducer } from 'connected-next-router'

import timer from './timer'
import counter from "./counter"
import characters from "./characters";
import characterPage from "./characterPage";

const rootReducer = combineReducers({
  timer,
  counter,
  characters,
  characterPage,
  router: routerReducer
});

export default rootReducer;