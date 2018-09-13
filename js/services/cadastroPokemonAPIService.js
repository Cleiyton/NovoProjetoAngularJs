angular.module("Pokemon").factory("cadastroPokemonAPI", function(http, config,$http ){

    var _salvarCadastroPokemon = function(pokemonCadastro){
        return $http.get(config.baseUrl + "/pokemon", pokemonCadastro );
    }

    return{
        getCadastroPokemon: _getCadastroPokemon
    }

})