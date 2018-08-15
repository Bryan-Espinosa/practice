import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logout, getUser } from "../../ducks/reducer";

function Nav(props) {
  console.log(props, " nav");
  return (
    <div>
      <h1>{props.user.username}</h1>
      <img
        onError={e => {
          e.target.src = props.user.profile_pic;
        }}
        src={props.user.profile_pic}
        alt="profilepic"
      />
      <Link to="/dashboard">
        <button>Home</button>
      </Link>
      <Link to="/new">
        <button>New Post</button>
      </Link>
      <button onClick={props.logout}>Logout</button>
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
  { logout, getUser }
)(Nav);
