const express = require("express");
const { json } = require("body-parser");
const port = process.env.PORT || 3001;

const app = express();

app.use(json());

app.listen(port, console.log(`listening on port ${port}`));
