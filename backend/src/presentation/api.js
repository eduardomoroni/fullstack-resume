const logger = require('morgan');
const express = require('express');
const { router } = require('./routes');
const { enableCORS } = require('./middlewares/cors');

const app = express();

app.disable('etag');
app.disable('x-powered-by');

if (process.env.NODE_ENV === 'development') {
  app.use(enableCORS);
}

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(router);

module.exports = app;
