angular.module("app").controller("controller", function($scope, service) {
  $scope.test= 'test';
  $scope.getPokemon = function() {
    service.pokemon().then(function(pokemon){
      $scope.myPokemon = pokemon;
    })
  };

  $scope.getCharmander = function() {
    service.getCharmander().then(function(charmander){
      $scope.charmander = charmander;
    })
  };

  $scope.getPikachu = function() {
    service.getPikachu().then(function(pikachu){
      $scope.pikachu = pikachu;
    })
  }
  $scope.getPokemon();
  $scope.getCharmander();
  $scope.getPikachu();
});
