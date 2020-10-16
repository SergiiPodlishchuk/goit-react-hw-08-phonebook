import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";

import contactAction from "./contactAction";

const onAddContact = (state, { payload }) => {
  return [payload, ...state];
};
const onRemoveContact = (state, { payload }) => {
  return state.filter(({ id }) => id !== payload);
};

const items = createReducer([], {
  [contactAction.fetchContactsSuccess]: (_, { payload }) => payload,
  [contactAction.addContactsSuccess]: onAddContact,
  [contactAction.removeContactsSuccess]: onRemoveContact,
});

const filter = createReducer("", {
  [contactAction.changeFilter]: (state, { payload }) => payload,
});

const loading = createReducer(false, {
  [contactAction.fetchContactsRequest]: () => true,
  [contactAction.fetchContactsSuccess]: () => false,
  [contactAction.fetchContactsError]: () => false,
  [contactAction.addContactsRequest]: () => true,
  [contactAction.addContactsSuccess]: () => false,
  [contactAction.addContactsError]: () => false,
  [contactAction.removeContactsRequest]: () => true,
  [contactAction.removeContactsSuccess]: () => false,
  [contactAction.removeContactsError]: () => false,
});

export default combineReducers({
  items,
  filter,
  loading,
});
