import { combineReducers } from 'redux';
import analyticsReducer from './analytics/analyticsReducer';
import customFormReducer from './customForm/customFormReducer';

const rootReducer = combineReducers({
  analytics: analyticsReducer,
  customForm: customFormReducer,
});

export default rootReducer;
