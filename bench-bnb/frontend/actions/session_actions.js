import SessionAPIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

export const login = (user) => {
  SessionAPIUtil.login(user).then(response => {
    return dispatch(receiveCurrentUser(response));
  }).fail(errors => {
    return dispatch(receiveErrors(errors));
  });
};

export const logout = () => {
  SessionAPIUtil.logout().then(response => {
    return dispatch(receiveCurrentUser(null));
  }).fail(errors => {
    return dispatch(receiveErrors(errors));
  });
};

export const signup = (user) => {
  SessionAPIUtil.signup(user).then(response => {
    return dispatch(receiveCurrentUser(response));
  }).fail(errors => {
    return dispatch(receiveErrors(errors));
  });
};

export const receiveCurrentUser = (user) => {
  type: RECEIVE_CURRENT_USER,
  user
}

export const receiveErrors = (errors) => {
  type: RECEIVE_ERRORS,
  errors
}
