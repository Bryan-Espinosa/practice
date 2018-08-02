import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

function Nav(props) {
  console.log(props);
  return (
    <div>
      <h1>{props.user.username}</h1>
      <img src={props.user.profile_pic} alt="error" />
      <Link to="/dashboard">
        <button>Home</button>
      </Link>
      <Link to="/new">
        <button>New Post</button>
      </Link>
      <Link to="/">
        <button>Logout</button>
      </Link>
    </div>
  );
}
const mapStateToProps = state => {
  return {
    user: state.user
  };
};

export default connect(
  mapStateToProps,
  {}
)(Nav);
