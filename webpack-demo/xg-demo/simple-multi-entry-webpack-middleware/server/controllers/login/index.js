var express = require('express');
var router = express.Router();
var loginCtrl = require('./login.controller.js');


router.use('/home', function (req, res) {
  loginCtrl.render(req, res, 'home');
});

module.exports = router;
