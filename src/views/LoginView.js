import React, { Component } from "react";
import { connect } from "react-redux";
import authOperations from "../redux/auth/authOperations";

const INITIAL_LOGIN = {
  email: "",
  password: "",
};

class LoginViews extends Component {
  state = INITIAL_LOGIN;

  inputEmail = ({ target }) => {
    this.setState({
      email: target.value,
    });
  };

  inputPassword = ({ target }) => {
    this.setState({
      password: target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    const { onLogin } = this.props;
    onLogin(email, password);
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
            <input type="email" value={email} onChange={this.inputEmail} />
          </label>
          <label>
            Password
            <input
              type="password"
              value={password}
              onChange={this.inputPassword}
            />
          </label>

          <button type="submit">Login</button>
        </form>
      </>
    );
  }
}

// const mapDispatchToProps = () => ({
//   onLogin: authOperations.login,
// });

export default connect(null, { onLogin: authOperations.login })(LoginViews);
