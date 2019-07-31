import {CREATE_USER, LOGIN_SUCCESS, NO_AUTH} from '../store/actions/action.types';
import {set, removeItem} from '../utils/localStorage.js';

export const setToken = store => next => action => {
    if(action.type === CREATE_USER || action.type === LOGIN_SUCCESS) {
        set('token', action.payload);
        set('user', JSON.stringify(action.userdata))
    }
    next(action);
}

export const redirectAuth = store => next => action => {
  if (action.type === NO_AUTH) {
    removeItem("hashedToken");
    window.location.reload();
  }
  next(action);
};