import { RECEIVE_BENCHES, RECEIVE_BENCH } from '../actions/bench_actions';
import merge from "lodash/merge"

const initialState = [];
const benchesReducer = (state = initialState, action) => {
  Object.freeze(state);
  // console.log(state);
  switch(action.type) {
    case RECEIVE_BENCHES:
      return action.benches;
    case RECEIVE_BENCH:
      let newState = merge([], state);
      if (newState.benches === undefined) {
        newState = [action.bench];
      } else {
        newState.push(action.bench)
      }
      return newState;
    default:
      return state;
  }
}

export default benchesReducer;
