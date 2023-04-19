const fs = require('fs');
const url = require('url');
const controller = require('./controller');

module.exports = (req, res) => {
  if (req.method === 'GET') {
    if (req.url == '/') {
      controller.index(res);
    }
  } else if (req.method === 'POST') {
    let d = '';

    req.on('data', data => {
      d += data;
    });

    req.on('end', () => {
      controller.user(require('querystring').parse(d), res);
    });

    res.end();
  }
};
