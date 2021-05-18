const express = require("express");
const helmet = require("helmet");
const compression = require("compression");
// const path = require("path");
const app = express();

require("dotenv").config();
app.use(compression());

app.get("/", (req, res) => {
  res.json({ isUp: true });
});

app.listen(process.env.PORT);
app.use(helmet());
