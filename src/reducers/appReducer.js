import { combineReducers } from 'redux';
import {
  START_LOADING, STOP_LOADING,
  SHOW_ERROR, HIDE_ERROR
} from '../actions/appActions';

function loadingStatus(state = {}, action) {
  switch (action.type) {
  case START_LOADING:
    return {
      loading: true,
      loadingMessage: action.message
    };
  case STOP_LOADING:
    return {
      loading: false,
      loadingMessage: ""
    };
  default:
    return Object.assign({}, state, {
      loading: false,
      loadingMessage: ""
    });
  }
}

function errorStatus(state = {}, action) {
  switch (action.type) {
  case SHOW_ERROR:
    console.log(`Error: ${action.message}`);
    return {
      error: true,
      errorMessage: action.message
    };
  case HIDE_ERROR:
    return {
      error: false,
      errorMessage: ""
    };
  default:
  return Object.assign({}, state, {
    error: false,
    errorMessage: ""
  });
  }
}

const appReducer = combineReducers({
  loadingStatus,
  errorStatus
});

export default appReducer;
