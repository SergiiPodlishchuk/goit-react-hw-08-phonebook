import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";

import authActions from "./authActions";

const INITIAL_USER = { name: null, email: null };

const user = createReducer(INITIAL_USER, {
  [authActions.registerSuccess]: (_, { payload }) => payload.user,
  [authActions.loginSuccess]: (_, { payload }) => payload.user,
  [authActions.logoutSuccess]: () => INITIAL_USER,
  [authActions.getCurrentUserSuccess]: (_, { payload }) => payload,
});
const token = createReducer(null, {
  [authActions.registerSuccess]: (_, { payload }) => payload.token,
  [authActions.loginSuccess]: (_, { payload }) => payload.token,
  [authActions.logoutSuccess]: () => null,
});
const error = createReducer(null, {
  [authActions.registerError]: (_, { payload }) => payload,
  [authActions.loginError]: (_, { payload }) => payload,
  [authActions.logoutError]: (_, { payload }) => payload,
  [authActions.getCurrentUserError]: (_, { payload }) => payload,
});

export default combineReducers({ user, token, error });
