import React, { Component } from "react";
import "./App.css";
import Nav from "./component/nav/Nav";
import routes from "./routes";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { getUser } from "./ducks/reducer";

class App extends Component {
  componentDidMount() {
    this.props.getUser();
  }
  render() {
    console.log(this.props, "app");
    return (
      <div className="App">
        {this.props.location.pathname === "/" ? null : <Nav />}
        {routes}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return { ...state };
};

export default connect(
  mapStateToProps,
  { getUser }
)(withRouter(App));
