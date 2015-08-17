'use strict';

var express = require('express');
var morgan = require('morgan');

var app = express();

app.set('port', process.env.PORT || 3000);

app.use(function helloWorld(req, res) {
  res.send('Hello World!');
});

app.listen(app.get('port'), function () {
  console.log('Server listening on port %d in %s mode...',
    app.get('port'),
    app.get('env')
  );
});

module.exports = app;
