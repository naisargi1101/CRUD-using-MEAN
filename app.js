// importing the modules
var express = require("express");
var mongoose = require("mongoose");
var bodyparser = require("body-parser");
var cors = require("cors");
var path = require("path");

var app = express();

//adding middleware - cors
app.use(cors());

//body - parser
app.use(bodyparser.json());

//static files
app.use(express.static(path.join(__dirname, "public")));

//Connect to mongoose
mongoose.connect("mongodb://localhost:27017/contactlist");

// on connection
mongoose.connection.on("connected", () => {
  console.log("Connected successffully mongodb");
});

mongoose.connection.on("error", (err) => {
  if (err) {
    console.log("Error in DB connection: " + err);
  }
});

// port no
const port = 3000;

app.listen(port, () => {
  console.log("Server started at port:" + port);
});

//testing server
app.get("/", (req, res) => {
  res.send("foobar");
});

// Routing
const route = require("./routes/route");
app.use("/api", route);
