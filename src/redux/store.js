import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import contactReducer from "../redux/contacts/contactReducer";
import authReducer from "../redux/auth/authReducer";
const defaultMiddleware = getDefaultMiddleware();

const authPersisstCOnfig = {
  key: "auth",
  storage,
  whitelist: ["token"],
};

export const store = configureStore({
  reducer: {
    contacts: contactReducer,
    // auth: authReducer,
    auth: persistReducer(authPersisstCOnfig, authReducer),
  },
  middleware: [...defaultMiddleware],
});

export const persistor = persistStore(store);
// export default store;
