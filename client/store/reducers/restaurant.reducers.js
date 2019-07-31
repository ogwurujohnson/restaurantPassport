import {
  CREATE_RESTAURANT,
  GET_RESTAURANTS,
  CREATING_RESTAURANT,
  DELETE_RESTAURANT,
  DELETING_RESTAURANT,
  EDITING_RESTAURANT,
  EDIT_RESTAURANT,
  FETCHING_RESTAURANT,
  CREATE_RESTAURANT_ERROR,
  DELETE_RESTAURANT_ERROR,
  EDIT_RESTAURANT_ERROR,
  GET_RESTAURANTS_ERROR,
  CREATE_REVIEW,
  DELETE_REVIEW,
  CREATING_REVIEW,
  DELETING_REVIEW,
  CREATE_ERROR_REVIEW,
  DELETE_ERROR_REVIEW
} from "../actions/action.types";

const initialState = {
  restaurants: [],
  creating: false,
  fetching: false,
  deleting: false,
  editing: false,
  error: false,
  success: false,
  message: ""
};

export const authReducers = (state = initialState, action) => {
  switch (action.type) {
    case CREATING_REVIEW:
      return {
        ...state,
        creating: true
      };
    case DELETING_REVIEW:
      return {
        ...state,
        deleting: true
      };
    case CREATING_RESTAURANT:
      return {
        ...state,
        creating: true
      };
    case FETCHING_RESTAURANT:
      return {
        ...state,
        fetching: true
      };
    case DELETING_RESTAURANT:
      return {
        ...state,
        deleting: true
      };
    case EDITING_RESTAURANT:
      return {
        ...state,
        editing: true
      };
    case CREATE_RESTAURANT:
      return {
        ...state,
        creating: false,
        restaurants: action.payload,
        message: action.message,
        error: false,
        success: true
      };
    case CREATE_REVIEW:
      return {
        ...state,
        creating: false,
        message: action.message,
        error: false,
        success: true
      };
    case DELETE_REVIEW:
      return {
        ...state,
        deleting: false,
        message: action.message,
        error: false,
        success: true
      };
    case CREATE_ERROR_REVIEW:
      return {
        ...state,
        creating: false,
        message: action.message,
        error: true,
        success: false
      };
    case DELETE_ERROR_REVIEW:
      return {
        ...state,
        deleting: false,
        message: action.message,
        error: true,
        success: false
      };
    case CREATE_RESTAURANT_ERROR:
      return {
        ...state,
        creating: false,
        message: action.message,
        error: true,
        success: false
      };
    case DELETE_RESTAURANT:
      return {
        ...state,
        deleting: false,
        restaurants: action.payload,
        message: action.message,
        error: false,
        success: true
      };
    case DELETE_RESTAURANT_ERROR:
      return {
        ...state,
        deleting: false,
        message: action.message,
        error: true,
        success: false
      };
    case EDIT_RESTAURANT:
      return {
        ...state,
        editing: false,
        restaurants: action.payload,
        message: action.message,
        error: false,
        success: true
      };
    case EDIT_RESTAURANT_ERROR:
      return {
        ...state,
        editing: false,
        message: action.message,
        error: true,
        success: false
      };
    case GET_RESTAURANTS:
      return {
        ...state,
        fetching: false,
        restaurants: action.payload,
        message: action.message,
        error: false,
        success: true
      };
    case GET_RESTAURANTS_ERROR:
      return {
        ...state,
        fetching: false,
        message: action.message,
        error: true,
        success: false
      };
    default:
      return state;
  }
};
