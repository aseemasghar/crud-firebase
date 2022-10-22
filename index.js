"use strict";
const express = require("express");
const bodyParser = require("body-parser");
const config = require("./config");
const userRoutes = require("./routes/route.js");

const app = express();

app.use(express.json());
app.use(bodyParser.json());

app.use("/api/v1", userRoutes);

app.listen(config.port, () =>
  console.log("App is listening on url http://localhost:" + config.port)
);
