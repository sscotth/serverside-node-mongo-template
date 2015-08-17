'use strict';

var express = require('express');
var morgan = require('morgan');

var routes = require('./routes');
var handleInternalServerErrors = require('./errors/internalServer');
var handleNotFoundErrors = require('./errors/notFound');

var app = express();

app.set('port', process.env.PORT || 3000);

app.use(morgan('dev'));

app.use('/', routes);

app.use(handleNotFoundErrors());
app.use(handleInternalServerErrors());

var server = app.listen(app.get('port'), function () {
  /* eslint-disable no-console */
  var port = server.address().port;
  var mode = app.get('env');

  console.log(`Server listening on port ${port} in ${mode} mode...`);
});

module.exports = app;
