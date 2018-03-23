const mongoose = require('mongoose');
const blueBird = require('bluebird');

const { NODE_ENV, MONGO_URL, MONGO_TEST_URL } = process.env;

const connectionUrl = NODE_ENV === 'production' ? MONGO_URL : MONGO_TEST_URL;

const parserOptions = {
  virtuals: true,
  getters: true,
  minimize: false,
  versionKey: false,
  transform: (doc, ret) => {
    ret.id = ret._id;
    delete ret._id;
    return ret;
  },
};

module.exports = { connectionUrl, parserOptions };
