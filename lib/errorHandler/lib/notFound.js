'use strict';

module.exports = function () {
  return function (req, res) {
    var msg = 'Not Found';

    res.status(404).format({
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
};
