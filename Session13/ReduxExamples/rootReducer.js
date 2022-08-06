import { combineReducers } from 'redux';

import counterReducer from './CounterApp/reducers';

// COMBINE MANY REDUCERS (Kết hợp nhiều reducer : Reducer gốc)
const rootReducer = combineReducers({
  counterReducer,
  // bankReducer,
  // cartReducer
});

export default rootReducer;
