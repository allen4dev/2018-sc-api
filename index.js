const http = require('http')

const server = http.createServer(function(req, res) {
  res.end('Starting the API')
})

server.listen(8080, () => {
  console.log('Server running in PORT: ', 8080)
})
