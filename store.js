import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import rootReducer from './reducers'

import {
  createRouterMiddleware,
} from "connected-next-router";

const routerMiddleware = createRouterMiddleware();

// Using next-redux-wrapper's makeStore
export const initializeStore = () => {
  return createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(routerMiddleware,thunk))
  );
}
