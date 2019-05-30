const express = require('express');
const app = express();
const userRouter = require('./routes/user')


app.use((req,res,next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Request-With, Content-Type, Accept');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE, OPTIONS');
  next();
});


app.use("/api/user", userRouter);
module.exports = app;


