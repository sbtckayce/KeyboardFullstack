const express = require("express");
require("dotenv").config();
const dbConnect = require("./config/dbconnect");
const initRoutes =require("./routes/index")
const app = express();

const port = process.env.PORT || 8888;

// doc file json
app.use(express.json());

// doc data array , object
app.use(express.urlencoded({ extended: true }));

dbConnect();

initRoutes(app)

app.listen(port, () => {
  console.log("server run" + port);
});
