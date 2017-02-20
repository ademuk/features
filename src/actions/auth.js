import api from '../data/api';

export const CREATE_SESSION_SUCCESS = 'CREATE_SESSION_SUCCESS';
export const DESTROY_SESSION_SUCCESS = 'DESTROY_SESSION_SUCCESS';

export function loadSession() {
  return dispatch => {
    const payload = api.getTokenPayload();
    const isValidSession = payload && payload.exp > (Date.now() / 1000);

    dispatch({
      type: isValidSession ? CREATE_SESSION_SUCCESS : DESTROY_SESSION_SUCCESS
    });

    return payload;
  };
}

export function createSession(credentials) {
  return dispatch => {
    return api.post('/sessions/', credentials)
      .then(function (response) {
        api.setToken(response.data.token);

        dispatch({
          type: CREATE_SESSION_SUCCESS
        });

        return response.data;
      });
  };
}

export function destroySession() {
  return dispatch => {
    api.destroyToken(null);

    dispatch({
      type: DESTROY_SESSION_SUCCESS
    });
  };
}
