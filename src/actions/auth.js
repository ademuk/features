import api from '../data/api';

export const CREATE_SESSION_REQUEST = 'CREATE_SESSION_REQUEST';
export const CREATE_SESSION_SUCCESS = 'CREATE_SESSION_SUCCESS';
export const CREATE_SESSION_FAILED = 'CREATE_SESSION_FAILED';
export const DESTROY_SESSION_SUCCESS = 'DESTROY_SESSION_SUCCESS';

export function loadSession() {
  return dispatch => {
    const payload = api.getTokenPayload();
    const isValidSession = payload && payload.exp > (Date.now() / 1000);

    dispatch({
      type: isValidSession ? CREATE_SESSION_SUCCESS : DESTROY_SESSION_SUCCESS,
      session: payload
    });

    return payload;
  };
}

export function createSession(credentials) {
  return dispatch => {

    dispatch({
      type: CREATE_SESSION_REQUEST
    });

    return api.post('/sessions/', credentials)
      .then(response => {
        api.setToken(response.data.token);

        const payload = api.getTokenPayload();

        dispatch({
          type: CREATE_SESSION_SUCCESS,
          session: payload
        });

        return response.data;
      })
      .catch(() => {
        dispatch({
          type: CREATE_SESSION_FAILED
        });

        dispatch({
          type: DESTROY_SESSION_SUCCESS
        });

        return Promise.reject();
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
