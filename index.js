const express = require("express");
const app = express();
const {errorHandler} = require('./middleware/errorMiddlware')
const dotenv = require("dotenv").config();
const cors = require("cors");


const port = process.env.PORT || 5000;
const dbConfig = require("./config/db");


app.use(cors({ credentials: true, origin: "http://localhost:5000" }));
app.use(express.json());

app.use('/api/admin', require('./routes/adminRoutes'))
app.use(errorHandler);

// listen to port
app.listen(port, () => {
  console.log(`Server is running on PORT : ${port}`);
});
