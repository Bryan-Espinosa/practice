import React, { Component } from "react";

import "./App.css";
import Auth from "./component/auth/Auth";
import Nav from "./component/nav/Nav";
import Dashboard from "./component/dashboard/Dashboard";
import Form from "./component/form/Form";
import Posts from "./component/posts/Posts";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Auth />
        <Dashboard />
        <Form />
        <Posts />
      </div>
    );
  }
}

export default App;
