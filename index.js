const express = require("express");
const cors = require("cors");
require("dotenv").config();
require("./config/db");


const carsRouters = require("./routes/cars.router");
const errorHandler =  require("./helpers/errorHandler");


const app = express();
// app.use(cors({ credentials: true, origin: "http://localhost:5000" }));
app.use(express.json());

app.use("/api/cars", carsRouters.router);
app.use('/api/admin', require('./routes/adminRoutes'))
app.use('/api/user', require('./routes/usersRoutes'))

app.get("/", (req, res) => {
  res.json({
    success: 1,
    message: "I am listening on port " + process.env.PORT
  });
});

app.all("*", (req, res, next) => {
  next(new AppError(`the url ${req.originalUrl} does not exist`, 404));
});

app.use(errorHandler.messageErr);

// listen to port
app.listen(process.env.PORT || 5000, () => {
  console.log("Server up and running on PORT : ", process.env.PORT);
});

