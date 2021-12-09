import { SIGN_IN_USER, SIGN_UP_USER } from '../_action/type';

export default function userReducer(state = {}, action) {
  switch (action.type) {
    case SIGN_IN_USER:
      return { ...state, signIn: action.payload };
    case SIGN_UP_USER:
      return { ...state, signUp: action.payload };
    default:
      return state;
  }
}
