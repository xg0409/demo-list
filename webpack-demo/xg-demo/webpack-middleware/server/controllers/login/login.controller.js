var express = require('express');
var router = express.Router();

function render(req, res, moduleName) {
  res.render('login/home', {
    projectName: 'credit-biz/creditcard/apply',
    moduleName: moduleName,
    title:'login home2222'
  });
}

module.exports = {
  render: render
};
