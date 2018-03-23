const { Router } = require('express');

const { jobRouter } = require('./job');
const { timeRouter } = require('./time');
const { helloRouter } = require('./hello');
const { notFoundRouter } = require('./notFound');
const { errorHandler } = require('./errorsHandler');
const { ignoreFavIcon } = require('./ignoreFavIcon');

const router = Router();

router.use(jobRouter);
router.use(timeRouter);
router.use(helloRouter);

router.use(errorHandler);
router.use(ignoreFavIcon);
router.use(notFoundRouter);

module.exports = { router };
