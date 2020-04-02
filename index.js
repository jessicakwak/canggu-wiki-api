const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

require("dotenv").config();
require("./db");

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/types", require("./controllers/types"));
app.use("/features", require("./controllers/features"));
app.use("/restaurants", require("./controllers/restaurants"));

app.listen(process.env.PORT, err => {
  err ? console.log(err) : console.log(`Server running on ${process.env.PORT}`);
});

module.exports = app;
