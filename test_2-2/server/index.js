const express = require("express");
const app = express();
const port = 5000;
const { Chart } = require("./models/Chart");

app.get("/api/chart", (req, res) => {
  res.send(Chart);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
