const mongoose = require('mongoose');
const blueBird = require('bluebird');

const connect = async url => {
  const options = { useMongoClient: true, promiseLibrary: blueBird };
  mongoose.Promise = blueBird;

  await mongoose.connect(url, options);
  mongoose.connection.on(
    'error',
    console.error.bind(console, 'MongoDB connection error:'),
  );
};

const close = async () => {
  mongoose.connection.close();
};

module.exports = { connect, close };
