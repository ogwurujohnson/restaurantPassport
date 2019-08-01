import axiosPump from "../../utils/axios";
import {
  CREATE_BLACKLIST,
  CREATE_BLACKLIST_ERROR,
  CREATING_BLACKLIST,
  DELETE_BLACKLIST,
  DELETE_BLACKLIST_ERROR,
  DELETING_BLACKLIST,
  FETCHING_BLACKLIST,
  GET_BLACKLISTS,
  GET_BLACKLIST_ERROR,
  NO_AUTH
} from "./action.types";

export const addToBlacklist = url => dispatch => {
  dispatch({ type: CREATING_BLACKLIST })
  axiosPump()
    .post(url)
    .then(res => {
      dispatch({ type: CREATE_BLACKLIST, payload: res.data, message: 'blacklisted successful' })
    })
    .catch(err => {
      dispatch({ type: CREATE_BLACKLIST_ERROR, message: 'blacklisting failed' })
    });
};

export const getBlacklists = url => dispatch => {
  dispatch({ type: FETCHING_BLACKLIST })
  return axiosPump()
    .get(url)
    .then(res => {
      if(res.status === 200) {
        dispatch({ type: GET_BLACKLISTS, payload: res.data, message: 'blacklist fetch success' });
      } else if(res.status === 401) {
        dispatch({ type: NO_AUTH })
      }
    })
    .catch(err => {
      dispatch({ type: GET_BLACKLIST_ERROR, message: 'blacklist fetch failed' });
    });
};

export const removeFromBlackList = url => dispatch => {
  axiosPump()
    .delete(url)
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      console.log(err);
    });
};
