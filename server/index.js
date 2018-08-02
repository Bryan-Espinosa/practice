const express = require("express");
const { json } = require("body-parser");
const port = process.env.PORT || 3001;
const massive = require("massive");
const { register, login } = require("./controller");
const session = require("express-session");
require("dotenv").config();

const app = express();

app.use(json());

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    saveUninitialized: false,
    resave: false,
    cookie: { maxAge: 1000000 * 24 * 7 }
  })
);

massive(process.env.CONNECTION_STRING)
  .then(dbInstance => {
    app.set("db", dbInstance);
  })
  .catch(err => console.log(err));

app.post("/api/register", register);
app.post("/api/login", login);

app.listen(port, console.log(`listening on port ${port}`));
