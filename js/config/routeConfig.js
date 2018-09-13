angular.module("Pokemon").config(function ($routeProvider) {
    $routeProvider.when("/listapokemon", {
        templateUrl: "view/listarPokemon.html",
        controller:"cadastroPokemonCtrl"
    })
});