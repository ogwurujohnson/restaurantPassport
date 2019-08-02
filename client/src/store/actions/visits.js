import axiosPump from "../../utils/axios";
import {
  CREATE_VISITS,
  CREATE_VISIT_ERROR,
  CREATING_VISITS,
  DELETE_VISITS,
  DELETE_VISIT_ERROR,
  DELETING_VISITS,
  FETCHING_VISITS,
  GET_VISITS,
  GET_VISIT_ERROR
} from "./action.types";

export const addToVisits = url => dispatch => {
  dispatch({ type: CREATING_VISITS })
  return axiosPump()
    .post(url)
    .then(res => {
      dispatch({ type: CREATE_VISITS, payload: res.data, message: 'adding to visits successfull' })
    })
    .catch(err => {
      dispatch({ type: CREATE_VISIT_ERROR, message: 'adding to visits failed' })
    });
};

export const getVisits = url => dispatch => {
  dispatch({ type: FETCHING_VISITS })
  return axiosPump()
    .get(url)
    .then(res => {
      dispatch({ type: GET_VISITS, payload: res.data, message: 'fetched visits successfully' })
    })
    .catch(err => {
      dispatch({ type: GET_VISIT_ERROR, message: 'fetched visits failed' })
    });
};

export const removeFromVisits = url => dispatch => {
  axiosPump()
    .delete(url)
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      console.log(err);
    });
};
