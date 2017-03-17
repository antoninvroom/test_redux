import {
  LOADING,
  ERROR,
  LOGIN,
  LOGOUT,
  ADD_USER
} from './types';
import { facebookLogin, facebookLogout } from '../src/facebook';

/*
  loading action
*/
export function attempt() {
  return {
    type: LOADING
  };
}

/*
 error action
 */
export function errors(err) {
  return {
    type: ERROR,
    err
  };
}

/*
 user loggedin action
 */
export function loggedin() {
  return {
    type: LOGIN
  };
}

/*
 user logged out
 */
export function loggedout() {
  return {
    type: LOGOUT
  };
}

/*
 creating user
 */
export function addUser(id, name, profileURL, profileWidth, profileHeight) {
  return {
    type: ADD_USER,
    id,
    name,
    profileURL,
    profileWidth,
    profileHeight
  };
}

/*
 dispatch login in reducer
 */
export function login() {
  return dispatch => {
    console.log('Before attempt');
    dispatch(attempt());
    facebookLogin().then((result) => {
      console.log('Facebook login success');
      dispatch(loggedin());
      console.log(result);
      //dispatch(addUser(result.id, result.name, result.picture.data.url, result.picture.data.width, result.data.height));
    }).catch((err) => {
      dispatch(errors(err));
    });
  };
}

/*
 dispatch logout in reducer
 */
export function logout() {
  return dispatch => {
    dispatch(attempt());
    facebookLogout().then(() => {
      dispatch(loggedout());
    })
  }
}
