const express = require("express");
const { json } = require("body-parser");
const port = process.env.PORT || 3001;
const massive = require("massive");
const {
  register,
  login,
  getPosts,
  createPost,
  logout,
  getUser
} = require("./controller");
const session = require("express-session");
require("dotenv").config();

const app = express();

app.use(json());

massive(process.env.CONNECTION_STRING)
  .then(dbInstance => {
    app.set("db", dbInstance);
  })
  .catch(err => console.log(err));

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    saveUninitialized: false,
    resave: false,
    cookie: { maxAge: 1000000 * 24 * 7 }
  })
);

app.post("/api/register", register);
app.post("/api/login", login);
app.post("/api/createPost", createPost);
app.post("/api/logout", logout);
app.post("api/getuser", getUser);

app.get("/api/getPosts", getPosts);

app.listen(port, console.log(`listening on port ${port}`));
