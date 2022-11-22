const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
const port = process.env.PORT || 5000;
const dbConfig = require("./config/db");
const test = "test"

app.use(cors());
app.use(express.json());

// listen to port
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});