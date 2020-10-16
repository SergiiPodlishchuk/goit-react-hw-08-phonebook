import axios from "axios";
import contactAction from "./contactAction";

axios.defaults.baseURL = "https://goit-phonebook-api.herokuapp.com";
// axios.defaults.baseURL = "https://localhost:3004";

const fetchContacts = () => (dispatch) => {
  dispatch(contactAction.fetchContactsRequest());
  axios
    .get("/contacts")
    .then((res) => {
      dispatch(contactAction.fetchContactsSuccess(res.data));
    })
    .catch((error) => dispatch(contactAction.fetchContactsError(error)));
};

const addContact = ({ name, number }) => (dispatch) => {
  dispatch(contactAction.addContactsRequest());
  axios
    .post("/contacts", { name, number })
    .then(({ data }) => dispatch(contactAction.addContactsSuccess(data)))
    .catch((error) => dispatch(contactAction.addContactsError(error)));
};

const removeContacts = (id) => (dispatch) => {
  dispatch(contactAction.removeContactsRequest());
  axios
    .delete(`/contacts/${id}`)
    .then(() => dispatch(contactAction.removeContactsSuccess(id)))
    .catch((error) => dispatch(contactAction.removeContactsError(error)));
};

export default {
  fetchContacts,
  addContact,
  removeContacts,
};
