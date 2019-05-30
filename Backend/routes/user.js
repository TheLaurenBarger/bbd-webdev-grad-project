const express = require('express');

const router = express.Router();

router.get('', (req,res,next) => {

  res.status(200).json({
    id: 'edxtcrfyvgtubhi',
    name: 'Lauren Barger',
    title: 'Master Breaker'
  })

})

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

module.exports = router;
