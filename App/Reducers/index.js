import { combineReducers } from 'redux';
import filterReducer from './filterReducer';
import peopleReducer from './peopleReducer';

const rootReducer = combineReducers({
  filter: filterReducer,
  data: peopleReducer
});

export default rootReducer;