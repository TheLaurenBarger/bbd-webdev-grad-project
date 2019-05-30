const express = require('express');

const router = express.Router();


router.get('', (req,res,next) => {
  res.status(200).json({
    id: 'ewsrydtfgyuh',
    name: 'Lauren Barger',
    title: 'Master Breaker'
  });
});

module.exports = router;
