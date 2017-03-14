import { ADD_USER } from '../actions/types';

function profileReducer(state = { id: null, name: null, profileURL: null, profileWidth: null, profileHeight: null }, action) {
  switch (action.type) {
    case ADD_USER:
      return Object.assign({}, state, {
        id: action.id,
        name: action.name,
        profileURL: action.profileURL,
        profileWidth: action.profileWidth,
        profileHeight: action.profileHeight
      });
    default:
      return state;
  }
}

export default profileReducer;
