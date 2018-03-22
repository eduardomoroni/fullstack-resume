var express = require('express');
var router = express.Router();

router.get('/emprego', function(req, res, next) {
  res.render('index', { title: 'Emprego' });
});

router.get('/tempo', function(req, res, next) {
  res.render('index', { title: 'Tempo' });
});

router.get('/hello', function(req, res, next) {
  res.render('index', { title: 'Hello' });
});

module.exports = router;
