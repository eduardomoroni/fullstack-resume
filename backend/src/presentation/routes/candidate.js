const { Router } = require('express');
const candidateRouter = Router();

const workExperience = {
  type: 'work',
  startDate: new Date(),
  endDate: new Date(),
  description: 'Work experience',
};

const educationalExperience = {
  type: 'educational',
  startDate: new Date(),
  endDate: new Date(),
  description: 'Educational experience',
};

candidateRouter.get('/candidate', function(req, res, next) {
  res.status(200).json({ name: 'Eduardo Moroni' });
});

candidateRouter.get('/candidate/experience', function(req, res, next) {
  res
    .status(200)
    .json({ experiences: [workExperience, educationalExperience] });
});

candidateRouter.get('/candidate/experience/work', function(req, res, next) {
  res.status(200).json({ works: [workExperience] });
});

module.exports = { candidateRouter };
