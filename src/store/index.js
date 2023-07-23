import { counterReducer } from './counter';
import { combineReducers, createStore } from 'redux';

//root reducer
const rootReducer = combineReducers({
  //key : value
  count: counterReducer,
});

//store
export const store = createStore(rootReducer);
