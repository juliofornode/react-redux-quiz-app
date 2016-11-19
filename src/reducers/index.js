import { combineReducers } from 'redux';
import dataFromReducer from './reducer_fetch_data';

const rootReducer = combineReducers({
  questions: dataFromReducer
});

export default rootReducer;
