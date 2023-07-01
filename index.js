const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();

// import from components
const ConnectDB = require("./src/database/dbConfig");
const Router = require("./src/routes/route");

const app = express();

ConnectDB();


app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(Router);
app.use("/uploads", express.static(__dirname + "/uploads"));

const port = process.env.SERVER_PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
