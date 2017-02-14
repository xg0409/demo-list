'use strict';

app.controller('IndexCtrl', ['$scope', 'IndexService', 'modalDialog', function ($scope, IndexService, modalDialog) {
  $scope.setPageSpinner(false);
  modalDialog.show();
}]);
