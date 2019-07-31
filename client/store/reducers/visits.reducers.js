import {
  GET_VISITS,
  GET_VISIT_ERROR,
  CREATING_VISITS,
  DELETING_VISITS,
  FETCHING_VISITS
} from "../actions/action.types";

const initialState = {
  visits: [],
  creating: false,
  fetching: false,
  deleting: false,
  error: false,
  success: false,
  message: ""
};

export const authReducers = (state = initialState, action) => {
  switch (action.type) {
    case CREATING_VISITS:
      return {
        ...state,
        creating: true
      };
    case FETCHING_VISITS:
      return {
        ...state,
        fetching: true
      };
    case DELETING_VISITS:
      return {
        ...state,
        deleting: true
      };
    case GET_VISITS:
      return {
        ...state,
        fetching: false,
        creating: false,
        deleting: false,
        visits: action.payload,
        message: action.message,
        error: false,
        success: true,
        
      };
    case GET_VISIT_ERROR:
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
