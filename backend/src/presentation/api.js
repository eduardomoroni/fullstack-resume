const logger = require('morgan');
const express = require('express');
const { router } = require('./routes');

const app = express();

app.disable('etag');
app.disable('x-powered-by');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(router);

module.exports = app;
