// Auth Actions here
import {
    AUTH_SIGN_IN_LOADING,
    AUTH_SIGN_IN_SUCCESS,
    AUTH_SIGN_IN_ERROR,
    AUTH_SIGN_OUT,
} from './auth.types';

export const login =(creds) => (dispatch) => {
    dispatch({ type : AUTH_SIGN_IN_LOADING});
    axios
      .post ("http://reqres.in/api/login", {
    email : data.email,
    password :data.password,
    })
     .then ((r) => {
    dispatch({ type : AUTH_SIGN_IN_SUCCESS, payload :r.data});
    })
    .catch(() => {
        dispatch({ type : AUTH_SIGN_IN_ERROR});
    });
};

export const logout =() => ({ type : LOGOUT});