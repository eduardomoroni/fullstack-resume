const mongoose = require('mongoose');
const blueBird = require('bluebird');

const connectionUrl =
  process.env.NODE_ENV === 'production'
    ? process.env.MONGO_URL
    : process.env.MONGO_TEST_URL;

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
