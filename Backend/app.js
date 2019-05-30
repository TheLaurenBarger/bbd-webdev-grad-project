const express = require('express');
const app = express();


app.use((req,res,next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Request-With, Content-Type, Accept');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE, OPTIONS');
  next();
});

app.use('/user', (req,res,next) => {

  res.status(200).json({

    id: 'ewsrydtfgyuh',
    name: 'Lauren Barger',
    title: 'Master Breaker'
  });
});

app.use('/warrior', (req,res,next) => {

  res.status(200).json({

    No: 'pushing to master without consent'
  });
});

module.exports = app;


