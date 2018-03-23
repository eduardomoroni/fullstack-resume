const { Router } = require('express');
const jobRouter = Router();

jobRouter.get('/emprego', function(req, res, next) {
  res.status(200).json({ title: 'Emprego' });
});

module.exports = { jobRouter };
