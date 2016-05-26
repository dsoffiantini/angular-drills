angular.module("arrayApp").controller("arrayController", function($scope, service) {
  $scope.data = service.myData;
});
