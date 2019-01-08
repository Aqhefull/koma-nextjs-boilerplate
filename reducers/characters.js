import * as R from "ramda";
import {
  FETCH_CHARACTERS_SUCCESS
} from '../actionTypes'

const initialState = {}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_CHARACTERS_SUCCESS:
      const newValues = R.indexBy(R.prop('id'), payload)
      return R.merge(state, newValues)
    default:
      return state;
  }
}