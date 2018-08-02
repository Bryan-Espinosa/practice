import React, { Component } from "react";
import { connect } from "react-redux";
import { register, login } from "../../ducks/reducer";

class Auth extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: ""
    };
  }
  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    return (
      <div>
        <input
          onChange={this.handleInputChange}
          type="text"
          name="username"
          value={this.state.username}
          placeholder="username"
        />
        <input
          onChange={this.handleInputChange}
          type="password"
          name="password"
          value={this.state.password}
          placeholder="password"
        />
        <button
          onClick={() =>
            this.props
              .register(
                this.state.username,
                this.state.password,
                `"https://robohash.org/${this.state.username}.png"`
              )
              .then(response => this.props.history.push("/dashboard"))
          }
        >
          Register
        </button>
        <button
          onClick={() =>
            this.props
              .login(this.state.username, this.state.password)
              .then(response => this.props.history.push("/dashboard"))
          }
        >
          Login
        </button>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return { ...state };
};

export default connect(
  mapStateToProps,
  { register, login }
)(Auth);
