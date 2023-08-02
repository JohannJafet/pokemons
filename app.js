const pokemonsGlobal = [];

const getPokemons = async () => {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=20&offset=20'); //Hacemos consulta de la api
    const responseJson = await response.json();
    const pokemons = responseJson.results; //trae los resultados del Json
    console.log(pokemons);

    for (let i = 0; i < pokemons.length; i++) {      
        const pokemon = pokemons[i];
        const pokemonUrl = pokemon.url;
        const response = await fetch(pokemonUrl);
        const responseJson = await response.json();
        normalizePokemons(responseJson, pokemon);
    }

    console.log(pokemonsGlobal);
}

const normalizePokemons = (responseJson, pokemon) => {
    const img = responseJson.sprites.other['official-artwork'].front_default;

        const pokemonObject = {
            name: pokemon.name,
            img: img,
        };

        pokemonsGlobal.push(pokemonObject);
} 

getPokemons();