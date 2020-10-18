import React, { Component } from "react";
import { connect } from "react-redux";
import authOperations from "../redux/auth/authOperations";

const INITIAL_LOGIN = {
  email: "",
  password: "",
};

class LoginViews extends Component {
  state = INITIAL_LOGIN;

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { onLogin } = this.props;
    onLogin({ ...this.state });
    this.setState({ ...INITIAL_LOGIN });
  };

  render() {
    const { email, password } = this.state;
    return (
      <>
        <h1>Login please</h1>
        <form onSubmit={this.handleSubmit}>
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

          <button type="submit">Login</button>
        </form>
      </>
    );
  }
}

export default connect(null, { onLogin: authOperations.login })(LoginViews);
