import { INCREMENT, DECREMENT, RESET } from "../actionTypes";

const exampleInitialState = {
  count: 0
};

export default (state = exampleInitialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return Object.assign({}, state, {
        count: state.count + 1
      });
    case DECREMENT:
      return Object.assign({}, state, {
        count: state.count - 1
      });
    case RESET:
      return Object.assign({}, state, {
        count: exampleInitialState.count
      });
    default:
      return state;
  }
};
