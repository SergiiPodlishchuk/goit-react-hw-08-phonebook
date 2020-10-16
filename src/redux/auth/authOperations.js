import axios from "axios";
import authActions from "./authActions";

axios.defaults.baseURL = "https://goit-phonebook-api.herokuapp.com";

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

const register = (userData) => async (dispatch) => {
  dispatch(authActions.registerRequest());
  await axios
    .post("/users/signup", userData)
    .then((response) => {
      console.log(response);
      token.set(response.data.token);
      dispatch(authActions.registerSuccess(response.data));
    })
    .catch((error) => dispatch(authActions.registerError(error)));
};

const login = (userData) => (dispatch) => {
  dispatch(authActions.loginRequest());
  axios
    .post("/users/login", userData)
    .then((response) => {
      token.set(response.data.token);
      dispatch(authActions.loginSuccess(response.data));
    })
    .catch((error) => dispatch(authActions.loginError(error)));
};

const logout = () => (dispatch) => {
  dispatch(authActions.logoutRequest());
  axios
    .post("/users/logout")
    .then(() => {
      token.unset();
      dispatch(authActions.logoutSuccess());
    })
    .catch((error) => dispatch(authActions.logoutError(error)));
};

const getCurrentUser = () => (dispatch, getState) => {
  const {
    auth: { token: persistedToken },
  } = getState();

  if (!persistedToken) {
    return;
  }

  token.set(persistedToken);
  dispatch(authActions.getCurrentUserRequest());
  axios
    .get("/users/current")
    .then(({ data }) => dispatch(authActions.getCurrentUserSuccess(data)))
    .catch((error) => dispatch(authActions.getCurrentUserError(error)));
};

export default {
  register,
  login,
  logout,
  getCurrentUser,
};
