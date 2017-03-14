import { UPDATE_FILTER } from '../actions/filter_actions';
import merge from "lodash/merge";

const initialState = {
  bounds: {},
  minSeating: 1,
  maxSeating: 10
};
const filterReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case UPDATE_FILTER:
      let newState = merge({}, state);
      // newState[action.filter] = action.value;
      newState[action.filter] = action.value;
      // console.log(newState);
      return newState;
    default:
      return state;
  }
}

export default filterReducer;
