const express = require("express");
const AuthRouter = require("./Routes/AuthRouter")
const app = express();
const mongoose = require("mongoose");
  

app.use(express.json());

app.use("/auth",AuthRouter);

app.listen(3001, () => {
    console.log("Server is running at port 3001");
});