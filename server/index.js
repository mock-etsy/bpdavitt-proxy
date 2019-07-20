const express = require("express");
const bodyParser = require("body-parser");

const app = express();

//Parse json and x-ww-form-urlencoded
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/", express.static("./client/dist"));

app.get("/api", (req, res) => {
  console.log("successful request!");
  res.send("Hi there");
});

app.listen(5000, () => console.log("Now stitching on port 5000!"));
