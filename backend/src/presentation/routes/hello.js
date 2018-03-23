const { Router } = require('express');
const helloRouter = Router();

helloRouter.get('/hello', function(req, res, next) {
  res.status(200).json({ title: 'Hello' });
});

module.exports = { helloRouter };
