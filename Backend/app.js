const express = require('express');
const app = express();
const userRouter = require('./routes/user')
const validateRouter = require('./routes/validate')
const tracksRouter = require('./routes/tracks')


app.use((req,res,next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Request-With, Content-Type, Accept');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE, OPTIONS');
  next();
});

app.use("/api/user", userRouter);
app.use('/api/validate', validateRouter);
app.use('/api/tracks', tracksRouter);

module.exports = app;


