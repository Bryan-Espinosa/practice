import React, { Component } from "react";
import { connect } from "react-redux";
import { getPosts } from "../../ducks/reducer";

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      search: "",
      myPosts: true
    };
  }

  componentDidMount() {
    this.props.getPosts();
  }
  render() {
    let posts = this.props.posts.map((post, index) => {
      return <div key={index}>{post.content}</div>;
    });
    return (
      <div>
        <input
          name="search"
          value={this.state.search}
          placeholder="Search Posts"
        />
        <input type="checkbox" value={this.state.myPosts} />
        <button>Search</button> <button>Reset</button>
        {posts}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return { ...state };
};

export default connect(
  mapStateToProps,
  { getPosts }
)(Dashboard);
