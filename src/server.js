const express = require("express");
const app = express();

app.get("/student_id", (req, res) => {
  res.send("61070198");
});

module.exports = app;
