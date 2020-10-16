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

  inputName = ({ target }) => {
    this.setState({
      name: target.value,
    });
  };

  inputPassword = ({ target }) => {
    this.setState({
      password: target.value,
    });
  };

  inputEmail = ({ target }) => {
    this.setState({
      email: target.value,
    });
  };

  //   handleChange = ({ target: { name, value } }) => {
  //     this.setState({ [name]: value });
  //   };

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
            <input type="text" value={name} onChange={this.inputName} />
          </label>
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

          <button type="submit">Register</button>
        </form>
      </>
    );
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return { onRegister: (props) => dispatch(authOperations.register(...props)) };
// };

export default connect(null, { onRegister: authOperations.register })(
  RegisterViews
);
