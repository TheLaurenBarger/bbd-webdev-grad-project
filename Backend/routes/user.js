const express = require('express');

const router = express.Router();

const MockDB = require('../mockdb');

router.get('', (req,res,next) => {
  let user = MockDB.MockUserDB.find(i => i.id === req.query.id);
  if (user === undefined) res.status(404)
  else res.status(200).json(user);
  return;
});

module.exports = router;
