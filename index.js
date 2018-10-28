const http = require('http');

const app = require('./server/app');

const server = http.createServer(app);

server.listen(8080, () => {
  console.log('Server running in PORT: ', 8080);
});
