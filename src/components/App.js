import React, { Component, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
// import { CSSTransition } from "react-transition-group";
import { connect } from "react-redux";

import Loader from "react-loader-spinner";
import "../../node_modules/react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import routes from "../routes";

import Navigation from "./Navigation";
import UserMenu from "../components/UserMenu/UserMenu";
import authSelectors from "../redux/auth/authSelectors";

import "./App.css";
import authOperations from "../redux/auth/authOperations";

class App extends Component {
  componentDidMount() {
    this.props.getCurrentUser();
  }

  render() {
    const { isLogin } = this.props;

    return (
      <>
        <Navigation />
        {isLogin && <UserMenu />}
        <Suspense
          fallback={
            <Loader
              type="ThreeDots"
              color="#f5f505"
              height={50}
              width={100}
              timeout={3000} //3 secs
            />
          }
        >
          <Switch>
            {routes.map((route) => (
              <Route key={route.path} {...route} />
            ))}
          </Switch>
        </Suspense>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  isLogin: authSelectors.isLogin(state),
});

const mapDispatchToProps = () => ({
  getCurrentUser: authOperations.getCurrentUser,
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
