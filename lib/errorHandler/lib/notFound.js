'use strict';

var app = require('../../../app/');

var env = app.get('env');

module.exports = function () {
  return function (req, res, next) {
    var status = 404;
    var msg = 'Not Found';

    if (env === 'production') {
      res.status(status).format({
        html: function () {
          res.send(`<html><head><title>${msg}</title></head><body><h1>${msg}</h1></body></html>`);
        },
        json: function () {
          res.json({
            error: { message: msg }
          });
        }
      });
    } else {
      var err = new Error(msg);
      err.status = status;
      next(err);
    }
  };
};
