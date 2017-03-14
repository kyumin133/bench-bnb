import sessionReducer from './session_reducer';
import benchesReducer from './benches_reducer';
import filterReducer from './filter_reducer';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
  session: sessionReducer,
  benches: benchesReducer,
  filter: filterReducer
});

export default rootReducer;
