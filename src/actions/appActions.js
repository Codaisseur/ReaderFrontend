export const START_LOADING = 'START_LOADING';
export const STOP_LOADING = 'STOP_LOADING';
export const SHOW_ERROR = 'SHOW_ERROR';
export const HIDE_ERROR = 'HIDE_ERROR';

export function startLoading(message) {
  return {
    type: START_LOADING,
    message: message
  };
}

export function stopLoading() {
  return {
    type: STOP_LOADING
  };
}

export function showError(message) {
  return {
    type: SHOW_ERROR,
    message: message
  };
}

export function hideError() {
  return {
    type: HIDE_ERROR
  };
}
