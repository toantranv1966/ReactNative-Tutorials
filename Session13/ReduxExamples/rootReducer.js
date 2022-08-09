import { combineReducers } from 'redux';

import counterReducer from './CounterApp/reducers';
import userReducer from './UsersApp/reducers';

// COMBINE MANY REDUCERS (Kết hợp nhiều reducer : Reducer gốc)
const rootReducer = combineReducers({
  counterReducer,
  userReducer,
  // bankReducer,
  // cartReducer
});

export default rootReducer;
