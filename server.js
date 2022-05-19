//1 require express
const express = require("express");
const connectDB = require("./config/connectDB");
//2 creation instance
const app = express();
// 5 require dotenv
require("dotenv").config();
//6 connec DB
const connnectDB = require("./config/connectDB");
connectDB();
// 7 require les routes
app.use("/api/contacts", require("./routes/contact"));
//8 Middleware routes
app.use(express.json());
//3 creation port
const PORT = process.env.PORT;
//4 creation server
app.listen(PORT, (error) => {
  error
    ? console.error(`Failed to connect to server!!! ${error}`)
    : console.log(`server is running on port ${PORT} ....`);
});
