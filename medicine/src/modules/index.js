import { combineReducers } from 'redux';
import modal from './modal';
import search from './search';

const rootReducer = combineReducers({
  modal,
  search,
});

export default rootReducer;
