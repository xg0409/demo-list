'use strict';

app.service('moduleEnvConfig', ['$log', 'EnvConfigBase', function ($log, EnvConfigBase) {
  // URL & env=dev|inte|rc|prod
  var moduleEnvConfig = EnvConfigBase.extend({

  });
  return new moduleEnvConfig();
}]);
