import { combineReducers } from 'redux';
import loginReducer from './authReducer';
import profileReducer from './profileReducer';

export default combineReducers({
  auth: loginReducer
});
