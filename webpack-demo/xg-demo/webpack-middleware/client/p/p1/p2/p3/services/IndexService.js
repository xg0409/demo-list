'use strict';

function defaultDto(result) {
  return result;
}

const IndexService = function ($log, WebApi) {
  return WebApi.extend({
    serviceName: 'IndexService',

    getDemo: function () {
      var reqData = this.getRequestData({});
      return this.request({
        data: reqData
      }, defaultDto);
    }
  });
};

app.service('IndexService', ['$log', 'WebApi', IndexService]);
