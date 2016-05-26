angular.module("app").controller("mainCtrl", function($scope, service){
  $scope.data = service.myData;
});
