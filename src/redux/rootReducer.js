import { combineReducers } from 'redux';
import analyticsReducer from './analytics/analyticsReducer';

const rootReducer = combineReducers({
  analytics: analyticsReducer,
});

export default rootReducer;
