// src/setupProxy.js

const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/https://api.charlieexchange.co/v1/', // Specify the base URL where your API requests are made
    createProxyMiddleware({
      target: 'https://api.charlieexchange.co/v1/user/login', // Replace with the actual API URL
      changeOrigin: true,
    })
  );
};
