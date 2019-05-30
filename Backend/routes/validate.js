const express = require('express');

const router = express.Router();

const MockDB = require('../mockdb');

router.get('', (req,res,next) => {
  let user = MockDB.MockUserDB.find(i => i.username === req.query.username);
  if (user === undefined)
  {
    res.status(401).json('Username or password incorrect');
    return;
  }
  if (user.password == req.query.password) res.status(200).json(user.id);
  return;
});


module.exports = router;
