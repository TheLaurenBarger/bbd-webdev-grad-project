const express = require('express');
const app = express();
const MockDB = require('./mockdb')

app.use((req,res,next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Request-With, Content-Type, Accept');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE, OPTIONS');
  next();
});

app.use('/user', (req,res,next) => {
  let user = MockDB.MockUserDB.find(i => i.id === req.query.id);
  if (user === undefined) res.status(404)
  else res.status(200).json(user);
  return;
});


app.use('/validate', (req,res,next) => {
  let user = MockDB.MockUserDB.find(i => i.username === req.query.username);

  res.status(401).json('Username or password incorrect')
  if (user === undefined) return;
  if (user.password == req.query.pass) res.status(200).json(user.id);
  return;
});

app.use('/tracks', (req,res,next) => {
  let user = MockDB.MockUserDB.find(i => i.id === req.query.id);
  let tracks = MockDB.MockTrackDB.find(i => i.id === req.query.id);
  
  if (user === undefined) res.status(404).json('User not found')
  else res.status(200).json(tracks);
  return;
});

app.use('/warrior', (req,res,next) => {

  res.status(200).json({

    No: 'pushing to master without consent'
  });
});

module.exports = app;


