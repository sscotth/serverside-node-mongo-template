'use strict';

var errorhandler = require('errorhandler');

module.exports = function () {
  /* eslint-disable no-unused-vars */
  var env = process.env.NODE_ENV || 'development';

  if (env === 'production') {
    return function (err, req, res, next) {
      var msg = 'Internal Server Error';

      res.status(500).format({
        html: function () {
          res.send(`<html><head><title>${msg}</title></head><body><h1>${msg}</h1></body></html>`);
        },
        json: function () {
          res.json({
            error: { message: msg }
          });
        }
      });
    };
  } else {
    return errorhandler();
  }
};
