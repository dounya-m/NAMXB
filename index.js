const express = require("express");
const cors = require("cors");
require("dotenv").config();
require("./config/db");

const errorHandler = require("./helpers/errorHandler");

const app = express();
app.use(cors({ credentials: true, origin: "http://localhost:5000" }));
app.use(express.json());
app.set("view engine", "ejs");

<<<<<<< HEAD
app.use("/api/cars", carsRouters.router);
app.use('/api/admin', require('./routes/adminRoutes'))
app.use('/api/user', require('./routes/usersRoutes'))
app.use('/api/precmd', require('./routes/precmdRouter'))
=======
app.use("/api/cars", require("./routes/cars.router").router);
app.use("/api/upload", require("./routes/images.router").router);
app.use("/api/types", require("./routes/typeRoutes").router);
app.use("/api/details", require("./routes/detailRoutes").router);

app.use("/api/admin", require("./routes/adminRoutes"));
app.use("/api/user", require("./routes/usersRoutes"));
>>>>>>> e14089a0ecc1f739a0474f6156f5cd3cba679142

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
