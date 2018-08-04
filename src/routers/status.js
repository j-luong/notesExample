const express = require('express');

const router = express.Router();


router.get('/', (req, res, next) => {
  res.redirect('/ping');
  next();
});

router.get('/ping', (req, res, next) => {
  res.status(200).json({ ping: 'Hello world!' });
  next();
});

module.exports = router;
