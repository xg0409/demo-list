var express = require('express');
var router = express.Router();
var baitiaoCtrl = require('./baitiao.controller.js');


router.use('/get_coupon', function(req, res) {
  baitiaoCtrl.render(req, res, 'get_coupon');
});
router.use('/pull_new', function(req, res) {
  baitiaoCtrl.render(req, res, 'pull_new');
});

module.exports = router;
