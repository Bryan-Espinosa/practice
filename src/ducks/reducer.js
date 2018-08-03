import axios from "axios";

const initalState = {
  user: {},
  posts: []
};

const REGISTER = "REGISTER";
const LOGIN = "LOGIN";
const GETPOSTS = "GETPOSTS";
const CREATEPOST = "CREATEPOST";

export function register(username, password, profile_pic) {
  return {
    type: REGISTER,
    payload: axios
      .post("/api/register", { username, password, profile_pic })
      .then(results => results.data)
      .catch(err => console.log(err))
  };
}

export function login(username, password) {
  return {
    type: LOGIN,
    payload: axios
      .post("/api/login", { username, password })
      .then(results => {
        return results.data;
      })
      .catch(err => console.log(err))
  };
}

export function getPosts() {
  return {
    type: GETPOSTS,
    payload: axios
      .get("/api/getPosts")
      .then(results => {
        return results.data;
      })
      .catch(err => console.log(err))
  };
}

export function createPost(title, img, content) {
  return {
    type: CREATEPOST,
    payload: axios
      .post("/api/createPost", { title, img, content })
      .catch(err => console.log(err))
  };
}

export default function reducer(state = initalState, action) {
  switch (action.type) {
    case `${REGISTER}_FULFILLED`:
    case `${LOGIN}_FULFILLED`:
      return { ...state, user: action.payload };
    case `${GETPOSTS}_FULFILLED`:
      return { ...state, posts: action.payload };
    case `${CREATEPOST}_FULFILLED`:
      return { ...state };
    default:
      return state;
  }
}
