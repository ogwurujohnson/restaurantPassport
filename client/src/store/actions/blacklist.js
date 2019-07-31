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
  GET_BLACKLIST_ERROR
} from "./action.types";

export const addToBlacklist = url => dispatch => {
  axiosPump()
    .post(url)
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      console.log(err);
    });
};

export const getBlacklists = url => dispatch => {
  dispatch({ type: FETCHING_BLACKLIST })
  return axiosPump()
    .get(url)
    .then(res => {
      dispatch({ type: GET_BLACKLISTS, payload: res.data, message: 'blacklist fetch success' });
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
