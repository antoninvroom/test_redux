import { LOADING, ERROR, LOGIN, LOGOUT } from '../actions/types';

function loginReducer(state = {loading: false, loggedIn: false, error: null}, action) {
  console.log(action);
  switch(action.type) {
    case LOADING:
      console.log('Inside the LOADING case');
      return Object.assign({}, state, {
        loading: true
      });
    case LOGIN:
      return Object.assign({}, state, {
        loading: false,
        loggedIn: true,
        error: null,
      });
    case LOGOUT:
      return Object.assign({}, state, {
        loading: false,
        loggedIn: false,
        error: null
      });
    case ERROR:
      return Object.assign({}, state, {
        loading: false,
        loggedIn: false,
        error: action.err
      });
    default:
      return state;
  }

}

export default loginReducer;
