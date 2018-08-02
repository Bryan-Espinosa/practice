import axios from "axios";

const initalState = {
  user: {}
};

const REGISTER = "REGISTER";
const LOGIN = "LOGIN";

export function register(username, password, profile_pic) {
  console.log("hit reducer reg");
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
        console.log(results.data);
        return results.data;
      })
      .catch(err => console.log(err))
  };
}

export default function reducer(state = initalState, action) {
  switch (action.type) {
    case `${REGISTER}_FULFILLED`:
    case `${LOGIN}_FULFILLED`:
      return { ...state, user: action.payload };
    default:
      return state;
  }
}
