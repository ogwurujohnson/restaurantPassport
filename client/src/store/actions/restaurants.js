import axiosPump from "../../utils/axios";
import {
  GET_RESTAURANTS,
  CREATE_RESTAURANT,
  CREATE_RESTAURANT_ERROR,
  CREATING_RESTAURANT,
  DELETE_RESTAURANT,
  DELETE_RESTAURANT_ERROR,
  DELETING_RESTAURANT,
  EDITING_RESTAURANT,
  EDIT_RESTAURANT,
  EDIT_RESTAURANT_ERROR,
  FETCHING_RESTAURANT,
  GET_RESTAURANTS_ERROR
} from "../actions/action.types";

export const addRestaurant = (url, data) => dispatch => {
  dispatch({ type: CREATING_RESTAURANT })
  axiosPump()
    .post(url, data)
    .then(res => {
      dispatch({ type: CREATE_RESTAURANT, payload: res.data, message: 'creation successful' })
    })
    .catch(err => {
      dispatch({ type: CREATE_RESTAURANT_ERROR, message: 'creation failed' })
    });
};

export const getRestaurant = url => dispatch => {
  dispatch({ type: FETCHING_RESTAURANT })
  return axiosPump()
    .get(url)
    .then(res => {
      dispatch({ type: GET_RESTAURANTS, payload: res.data, message: 'fetching successful' });
    })
    .catch(err => {
      dispatch({ type: GET_RESTAURANTS_ERROR, message: 'fetching failed' });
    });
};

export const getCityRestaurant = url => dispatch => {
  dispatch({ type: FETCHING_RESTAURANT })
  return axiosPump()
    .get(url)
    .then(res => {
      dispatch({ type: GET_RESTAURANTS, payload: res.data, message: 'fetching successful' });
    })
    .catch(err => {
      dispatch({ type: GET_RESTAURANTS_ERROR, message: 'fetching failed' });
    });
};

export const removeRestaurant = url => dispatch => {
  axiosPump()
    .delete(url)
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      console.log(err);
    });
};

export const editRestaurant = (url, data) => dispatch => {
  axiosPump()
    .post(url, data)
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      console.log(err);
    });
};

export const addRestaurantReview = (url, data) => dispatch => {
  axiosPump()
    .post(url, data)
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      console.log(err);
    });
};

export const removeRestaurantReview = url => dispatch => {
  axiosPump()
    .delete(url)
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      console.log(err);
    });
};
