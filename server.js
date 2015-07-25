require('babel/register');
var express = require('express');
var path = require('path');
var httpProxy = require('http-proxy');
var bodyParser = require('body-parser');

var proxy = httpProxy.createProxyServer();
var app = express();

var isProduction = process.env.NODE_ENV === 'production';
var port = process.env.PORT;
var publicPath = path.resolve(__dirname, 'public');

app.use(express.static(publicPath));
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

require('./api')(app);

if (!isProduction) {
  var bundle = require('./bundle.js');
  bundle();

  app.all('/build/*', function(req, res) {
    proxy.web(req, res, {
      target: 'http://localhost:8080'
    });
  });
}

proxy.on('error', function() {
  console.log('Could nto connet to proxy, please try again...');
});

app.listen(port, function() {
  console.log('Server running on port ' + port);
});
