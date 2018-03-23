const enableCORS = (req, res, next) => {
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin,Content-Type, Authorization, x-id, Content-Length, X-Requested-With',
  );
  next();
};

module.exports = { enableCORS };
