'use strict';

var express = require('express');
var router = express.Router();

// Insert routes below /*
router.use('/baitiao', require('./baitiao'));
router.use('/bank_icbc', function(req, res) {
  var bankCtrl = require('./bank');
  bankCtrl.render(req, res, 'bank_icbc');
});
router.use('/bank_cbc', function(req, res) {
  var bankCtrl = require('./bank');
  bankCtrl.render(req, res, 'bank_cbc');
});

module.exports = router;
