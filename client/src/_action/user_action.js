import axios from 'axios';
import { SIGN_IN_USER, SIGN_UP_USER } from './type';

export function signInUser(dataToSubmit) {
  const request = axios
    .post('/api/users/signIn', dataToSubmit)
    .then((res) => res.data);

  return {
    type: SIGN_IN_USER,
    payload: request,
  };
}

export function signUpUser(dataToSubmit) {
  const request = axios
    .post('/api/users/signUp', dataToSubmit)
    .then((res) => res.data);

  return {
    type: SIGN_UP_USER,
    payload: request,
  };
}
