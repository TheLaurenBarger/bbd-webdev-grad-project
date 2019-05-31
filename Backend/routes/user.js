const express = require('express');

const router = express.Router();

const MockDB = require('../mockdb');

router.get('', (req,res,next) => {
  let user = MockDB.MockUserDB.find(i => i.id === req.query.id);
  if (user === undefined) res.status(404)
  else res.status(200).json(user);
  return;
});

router.post("/signup", (req, res, next) => {

  if (req.body.email != null && req.body.password != null)
  {
    res.send(201).json({
      message: 'Congrats on signing up!'
    })
  }
  else
  {
    res.send(500).json({
      message: 'Whoops! try again!'
    })
  }
})

router.use('/login', (req,res,next) => {
  console.log(req.body.password)
  if (req.body.username != null && req.body.password !=null)
  {
  let authUser = MockDB.MockUserDB.find(i => i.username === req.query.username);
    if (req.query.password !== authUser.password)
    {
      return res.status(401).json({
        message: "Auth failed"
      });
    }
    else{
    const token = authUser.username;
    res.send(200).json({
      token: token,
      expiresIn: 3600
    })
    }
  }

});


module.exports = router;
