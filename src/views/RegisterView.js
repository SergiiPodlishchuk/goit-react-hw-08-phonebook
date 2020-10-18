import React, { Component } from "react";
import { connect } from "react-redux";
import authOperations from "../redux/auth/authOperations";

const INITIAL_USER_REGISTER = {
  name: "",
  email: "",
  password: "",
};

class RegisterViews extends Component {
  state = INITIAL_USER_REGISTER;

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { onRegister } = this.props;
    onRegister({ ...this.state });
    this.setState({ ...INITIAL_USER_REGISTER });
  };

  render() {
    const { name, password, email } = this.state;

    return (
      <>
        <h1>Register please</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name
            <input
              type="text"
              name="name"
              value={name}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Email
            <input
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Password
            <input
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
            />
          </label>

          <button type="submit">Register</button>
        </form>
      </>
    );
  }
}

export default connect(null, { onRegister: authOperations.register })(
  RegisterViews
);
