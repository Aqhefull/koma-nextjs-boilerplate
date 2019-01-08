import { FETCH_CHARACTER } from '../actionTypes'
const initialState = {
  id: 0
}

export default (state = initialState, {type, id}) => {
  switch (type) {
    case FETCH_CHARACTER:
      return Object.assign({}, state, {
        id: id
      });
    default:
      return state;
  }
}