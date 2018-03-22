const createError = require('http-errors');
const { Router } = require('express');

const router = Router();

router.get('/emprego', function(req, res, next) {
  res.status(200).json({ title: 'Emprego' });
});

router.get('/tempo', function(req, res, next) {
  res.status(200).json({ title: 'Tempo' });
});

router.get('/hello', function(req, res, next) {
  res.status(200).json({ title: 'Hello' });
});

router.use(function(req, res, next) {
  next(createError(404));
});

router.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.render('error');
});

module.exports = { router };
