const { Router } = require('express');

const { candidateRouter } = require('./candidate');
const { notFoundRouter } = require('./notFound');
const { errorHandler } = require('./errorsHandler');
const { ignoreFavIcon } = require('./ignoreFavIcon');

const router = Router();

router.use(candidateRouter);

router.use(errorHandler);
router.use(ignoreFavIcon);
router.use(notFoundRouter);

module.exports = { router };
