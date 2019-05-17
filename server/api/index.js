const router = require('express').Router();
const { Video, View } = require('../db');
module.exports = router;

router.use('/', require('./videos'));

router.use((req, res, next) => {
  const error = new Error('Not Found');
  error.status = 404;
  next(error);
});
