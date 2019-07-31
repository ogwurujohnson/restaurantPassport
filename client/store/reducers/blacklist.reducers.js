import {
  GET_BLACKLISTS,
  GET_BLACKLIST_ERROR,
  CREATING_BLACKLIST,
  DELETING_BLACKLIST,
  FETCHING_BLACKLIST
} from "../actions/action.types";

const initialState = {
  blacklists: [],
  creating: false,
  fetching: false,
  deleting: false,
  error: false,
  success: false,
  message: ""
};

export const authReducers = (state = initialState, action) => {
  switch (action.type) {
    case CREATING_BLACKLIST:
      return {
        ...state,
        creating: true
      };
    case FETCHING_BLACKLIST:
      return {
        ...state,
        fetching: true
      };
    case DELETING_BLACKLIST:
      return {
        ...state,
        deleting: true
      };
    case GET_BLACKLISTS:
      return {
        ...state,
        fetching: false,
        creating: false,
        deleting: false,
        blacklists: action.payload,
        message: action.message,
        error: false,
        success: true,
        
      };
    case GET_BLACKLIST_ERROR:
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
