'use strict';

window.app = angular.module('angular_jfwebapp', [
  'ui.router'
]);

if (typeof FastClick === 'function') {
  app.run(function () {
    FastClick.attach(document.body);
  });
}


require('./configs/');
require('./router');
require('./configs/');
require('./views/');
require('./services/');
require('./stylesheets/');
require('./controllers/');
