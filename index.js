const express = require("express");
const app = express();
const colors = require("colors");
const morgan = require("morgan");
const cors = require("cors");
const dotenv = require("dotenv");
require("dotenv").config();
const path = require("path");
const port = process.env.PORT || 9988;

// load configs and var here
dotenv.config({ path: "./config/config.env" });
const errorHandler = require("./middleware/error");
const ConnectDB = require("./config/db");

// load routes here
const testing = require("./routes/testing/Test");

// middlewares
app.use(express.json());
app.use(cors());

// routes called here
app.use("/api/all/testing", testing);

// connect db here
ConnectDB();

// called error
app.use(errorHandler);

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
// default route
app.get("/", (req, res) => {
  res.send("The All In One Server Is Running...");
});
// default ports
app.listen(port, () => {
  console.log("The server port is running on 9988");
});
