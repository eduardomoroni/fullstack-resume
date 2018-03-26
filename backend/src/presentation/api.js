const logger = require('morgan');
const express = require('express');
const { router } = require('./routes');
const CORS = require('cors');

const app = express();

app.disable('etag');
app.disable('x-powered-by');

if (process.env.NODE_ENV !== 'production') {
  app.use(CORS());
}

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(router);

module.exports = app;
