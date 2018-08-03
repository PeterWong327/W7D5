import * as SessionAPIUtil from '../../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

export const login = (user) => (dispatch) => {
  return SessionAPIUtil.login(user).then( result => {
    dispatch(receiveCurrentUser(result));
  });
};

export const logout = () => (dispatch) => {
  return SessionAPIUtil.logout().then( result => {
    dispatch(receiveCurrentUser(null));
  });
};

export const signup = (user) => (dispatch) => {
  return SessionAPIUtil.signup().then( result => {
    dispatch(receiveCurrentUser(result));
  });
};

export const receiveCurrentUser = (currentUser) => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors
});
