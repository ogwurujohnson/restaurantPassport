import {
  CREATE_USER,
  CREATE_USER_ERROR,
  GET_USERS,
  GET_USER_ERROR,
  CREATING_USER,
  DELETE_USER,
  DELETE_USER_ERROR,
  DELETING_USER,
  EDITING_USER,
  EDIT_USER_ERROR,
  EDIT_USER,
  FETCHING_USER,
  LOGIN_IN,
  LOGIN_ERROR,
  LOGIN_SUCCESS
} from "../actions/action.types";

const initialState = {
  users: [],
  creating: false,
  fetching: false,
  deleting: false,
  editing: false,
  error: false,
  success: false,
  message: "",
  loginin: false
};

export const authReducers = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_IN:
      return {
        ...state,
        loginin: true
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loginin: false,
        success: true,
        error: false,
        message: action.message
      };
    case LOGIN_ERROR:
      return {
        ...state,
        loginin: false,
        success: false,
        error: true,
        message: action.message
      };
    case CREATING_USER:
      return {
        ...state,
        creating: true
      };
    case FETCHING_USER:
      return {
        ...state,
        fetching: true
      };
    case DELETING_USER:
      return {
        ...state,
        deleting: true
      };
    case EDITING_USER:
      return {
        ...state,
        editing: true
      };
    case CREATE_USER:
      return {
        ...state,
        creating: false,
        users: action.payload,
        message: action.message,
        error: false,
        success: true
      };
    case CREATE_USER_ERROR:
      return {
        ...state,
        creating: false,
        message: action.message,
        error: true,
        success: false
      };
    case DELETE_USER:
      return {
        ...state,
        deleting: false,
        users: action.payload,
        message: action.message,
        error: false,
        success: true
      };
    case DELETE_USER_ERROR:
      return {
        ...state,
        deleting: false,
        message: action.message,
        error: true,
        success: false
      };
    case EDIT_USER:
      return {
        ...state,
        editing: false,
        users: action.payload,
        message: action.message,
        error: false,
        success: true
      };
    case EDIT_USER_ERROR:
      return {
        ...state,
        editing: false,
        message: action.message,
        error: true,
        success: false
      };
    case GET_USERS:
      return {
        ...state,
        fetching: false,
        users: action.payload,
        message: action.message,
        error: false,
        success: true
      };
    case GET_USER_ERROR:
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
