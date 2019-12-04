import React, { useReducer } from 'react';
import AuthContext from '../auth/authContext';
import authReducer from '../auth/authReducer';
import axios from 'axios';
import setAuthToken from '../../../util/setAuthToken';
import {
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT,
  CLEAR_ERRORS,
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  USER_LOADED
} from '../types';

const AuthState = props => {
  const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: false,
    error: null
  };

  const [state, dispatch] = useReducer(authReducer, initialState);

  // Load User
  const loadUser = async () => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
    dispatch({
      type: USER_LOADED
    });
  };

  // Register User
  const register = async formData => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
    try {
      const res = await axios.post('/api/auth/register', formData, config);

      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data
      });

      loadUser();
    } catch (err) {
      dispatch({
        type: REGISTER_FAIL,
        payload: err.response.data
      });
    }
  };

  // Login User
  const login = async formData => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
    try {
      const res = await axios.post('/api/auth/login', formData, config);

      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: LOGIN_FAIL,
        payload: err.response.data
      });
    }
  };

  // Logout
  const logout = async () => {
    localStorage.removeItem('token');

    dispatch({
      type: LOGOUT
    });
  };
  // Clear Errors
  const clearErrors = () =>
    dispatch({
      type: CLEAR_ERRORS
    });

  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        isAuthenticated: state.isAuthenticated,
        error: state.error,
        register,
        clearErrors,
        loadUser,
        logout,
        login
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
export default AuthState;
