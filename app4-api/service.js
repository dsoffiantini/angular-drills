angular.module("app").service("service", function($http, $q) {

    this.pokemon = function() {
      var defer = $q.defer();
        $http({
            method: 'GET',
            url: 'http://pokeapi.co/api/v2/pokemon/7'
        }).then(function(pokemon){
          var myPokemon = pokemon.data.name;
          defer.resolve(myPokemon);
        });
      return defer.promise;
    };

    this.getCharmander = function() {
      var defer = $q.defer();
      $http({
        method: 'GET',
        url: 'http://pokeapi.co/api/v2/pokemon/4'
      }).then(function(charmander) {
        // var charmander = charmander; this line is only needed if I want to manipulate the data
        defer.resolve(charmander);
      });
      return defer.promise;
    }

    this.getPikachu = function() {
      var defer = $q.defer();
      $http({
        method: 'GET',
        url: 'http://pokeapi.co/api/v2/pokemon/25'
      }).then(function(pikachu) {
        defer.resolve(pikachu);
      });
      return defer.promise;
    }

});
