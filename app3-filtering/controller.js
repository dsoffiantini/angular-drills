angular.module("app").controller("mainCtrl", function($scope, service) {
  $scope.people = service.myData;
});
