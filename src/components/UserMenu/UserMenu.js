import React from "react";
import { connect } from "react-redux";
import authOperations from "../../redux/auth/authOperations";
import authSelectors from "../../redux/auth/authSelectors";

const UserMenu = ({ name, onLogout }) => {
  return (
    <div className="userMenu">
      <img
        src="https://static.ukrinform.com/photos/2019_10/1571237216-4798.jpeg"
        alt="userPhoto"
        style={{ width: 100 }}
      />
      <p>Welcome, {name}</p>
      <button type="submit" onClick={onLogout}>
        Logout
      </button>
    </div>
  );
};

const mapStateTorops = (state) => ({
  name: authSelectors.getUserName(state),
});

const mapDispatchToProps = () => ({
  onLogout: authOperations.logout,
});

export default connect(mapStateTorops, mapDispatchToProps)(UserMenu);
