var server = require('pushstate-server');

server.start({
  port: process.env.PORT || 9000,
  directory: './build'
});