import {
  LOADING,
  ERROR,
  LOGIN,
  LOGOUT,
  ADD_USER
} from './types';
import { facebookLogin, facebookLogout } from '../src/facebook';

export function attempt() {
  return {
    type: LOADING
  };
}

export function errors(err) {
  return {
    type: ERROR,
    err
  };
}

export function loggedin() {
  return {
    type: LOGIN
  };
}

export function loggedout() {
  return {
    type: LOGOUT
  };
}

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

export function logout() {
  return dispatch => {
    dispatch(attempt());
    facebookLogout().then(() => {
      dispatch(loggedout());
    })
  }
}
