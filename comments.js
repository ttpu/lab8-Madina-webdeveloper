// Create web server

var http = require('http');
var fs = require('fs');
var url = require('url');

var server = http.createServer(function(req, res) {
  var url_parts = url.parse(req.url);
  var path = url_parts.pathname;

  switch (path) {
    case '/':
      fs.readFile('./index.html', function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();
      });
      break;
    case '/comments':
      fs.readFile('./comments.json', function(err, data) {
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.write(data);
        res.end();
      });
      break;
    default:
      res.writeHead(404);
      res.write('Not found');
      res.end();
  }
});

server.listen(3000);
console.log('Server is listening on port 3000');