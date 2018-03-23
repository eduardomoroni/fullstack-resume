const mongoose = require('mongoose');
const blueBird = require('bluebird');

const connectMongo = async url => {
  const options = { useMongoClient: true, promiseLibrary: blueBird };
  mongoose.Promise = blueBird;

  await mongoose.connect(url, options);
  mongoose.connection.on(
    'error',
    console.error.bind(console, 'MongoDB connection error:'),
  );
};

const closeConnection = async () => {
  mongoose.connection.close();
};

module.exports = { connectMongo, closeConnection };
