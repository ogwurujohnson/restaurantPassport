import {SIGN_UP_SUCCESS, LOGIN_SUCCESS, NO_AUTH} from '../store/actions/actionTypes';
import {set, removeItem} from '../utils/localStorage';

export const setToken = store => next => action => {
    if(action.type === SIGN_UP_SUCCESS || action.type === LOGIN_SUCCESS) {
        set('hashedToken', action.payload);
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