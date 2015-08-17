'use strict';

module.exports.index = function index(req, res) {
  res.send('Home Page');
};

module.exports.contact = function contact(req, res) {
  res.send('Contact Page');
};
