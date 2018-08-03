import React, { Component } from "react";
import { connect } from "react-redux";
import { createPost } from "../../ducks/reducer";
import "./image.jpg";

class Form extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      img: "",
      content: ""
    };
  }
  handleInput = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    return (
      <div>
        <input
          onChange={this.handleInput}
          name="title"
          value={this.setState.title}
          placeholder="Title"
        />
        <img src="./image.jpg" />
        <input
          onChange={this.handleInput}
          name="img"
          value={this.setState.img}
          placeholder="Image URL"
        />
        <input
          onChange={this.handleInput}
          name="content"
          value={this.setState.content}
          placeholder="Content"
        />
        <button
          onClick={() =>
            this.props.createPost(
              this.state.title,
              this.state.img,
              this.state.content
            )
          }
        >
          Post
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
  { createPost }
)(Form);
