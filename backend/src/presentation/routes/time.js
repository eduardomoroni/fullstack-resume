const { Router } = require('express');
const timeRouter = Router();

timeRouter.get('/tempo', function(req, res, next) {
  res.status(200).json({ title: 'Tempo' });
});

module.exports = { timeRouter };
