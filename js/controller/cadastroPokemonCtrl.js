angular.module("Pokemon").controller("cadastroPokemonCtrl", function ($scope, $location, cadastroPokemonAPI) {
    $scope.app = "Pokemon"

    $scope.cadastroPokemon = [
        { nomePokemon: 'charizard', abilidade: 'fogo', ataques: 'bola de fogo', danoAtaque: 80 },
        { nomePokemon: 'lucario', abilidade: 'hurricane kick', ataques: 'seila', danoAtaque: 10 },
        { nomePokemon: 'raichu', abilidade: 'eletricidade', ataques: 'pancada do trovao', danoAtaque: 70 }
    ]



    $scope.adicionarPokemon = function (cadastroPokemon) {
        cadastroPokemonAPI.saveCadastroPokemon(cadastroPokemoncadastro).success(function (data) {
            delete $scope.cadastroPokemon;
            $scope.cadastroForm.$setPristine();
            $location.path("/login");
        })
    }

});