const express = require("express");
const app = express();
const route = require("./route/route");

const PORT = 8080;

app.use(express.static("public"));

app.use(express.json());

app.use(route);

app.listen(PORT, () => {
  console.log("Server is running on port ", PORT);
});