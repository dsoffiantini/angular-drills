angular.module("arrayApp").controller("arrayController", function($scope, service) {
  $scope.people = service.myData;
});
