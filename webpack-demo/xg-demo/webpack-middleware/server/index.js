'use strict';
var webpackConfigHandle = require('../webpack/config.handle.js');
var entrys = webpackConfigHandle.getStartEntrys() || {};
if (Object.keys(entrys).length) {
  require('../app.js');
}
