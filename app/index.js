'use strict';

var express = require('express');
var morgan = require('morgan');

var app = express();

app.set('port', process.env.PORT || 3000);

app.use(function helloWorld(req, res) {
  res.send('Hello World!');
});

var server = app.listen(app.get('port'), function () {
  var port = server.address().port;
  var mode = app.get('env');

  console.log(`Server listening on port ${port} in ${mode} mode...`);
});

module.exports = app;
