var express = require('express');
var router = express.Router();

function render(req, res, moduleName) {
  res.render('index', {
    projectName: 'activities/baitiao',
    moduleName: moduleName,
    title: 'login home2222'
  });
}

module.exports = {
  render: render
};