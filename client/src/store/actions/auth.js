import axios from "axios";
import {
  CREATE_USER,
  CREATING_USER,
  CREATE_USER_ERROR,
  LOGIN_ERROR,
  LOGIN_IN,
  LOGIN_SUCCESS
} from "./action.types";

export const register = (url, credentials) => dispatch => {
  dispatch({ type: CREATING_USER })
  return axios
    .post(url, credentials)
    .then(res => {
      dispatch({ type: CREATE_USER, message: 'signup successful' })
      console.log(res);
    })
    .catch(err => {
      dispatch({ type: CREATE_USER_ERROR, message: 'signup failed' })
      console.log(err);
    });
};

export const login = (url, credentials) => dispatch => {
  dispatch({ type: LOGIN_IN })
  return axios
    .post(url, credentials)
    .then(res => {
      dispatch({ type: LOGIN_SUCCESS, message: 'login successful', payload: res.data.token, userdata: res.data.user })
      console.log(res);
    })
    .catch(err => {
      dispatch({ type: LOGIN_ERROR, message: 'login failed' })
      console.log(err);
    });
};
