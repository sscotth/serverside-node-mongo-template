'use strict';

var express = require('express');
var morgan = require('morgan');

var routes = require('./routes');

var app = module.exports = express();

app.set('port', process.env.PORT || 3000);

app.use(morgan('dev'));

app.use('/', routes);

require('../lib/errorHandler/');

var server = app.listen(app.get('port'), function () {
  /* eslint-disable no-console */
  var port = server.address().port;
  var mode = app.get('env');

  console.log(`Server listening on port ${port} in ${mode} mode...`);
});
