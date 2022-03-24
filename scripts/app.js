// Pokemon's description https://pokeapi.co/api/v2/pokemon-species/{id or name}/
// Pokemon's Sprite https://pokeapi.co/api/v2/pokemon/{id or name}/

// const urlPokemon = 'https://pokeapi.co/api/v2/pokemon/';
// const urlSpecies = 'https://pokeapi.co/api/v2/pokemon-species/';

// const pokemon = document.getElementById('pokemonSearch');
// const buttonSearch = document.getElementById('searchPokemon');
// const pokemonName = document.getElementById('pokemonName');
// const pokemonImage = document.getElementById('pokemonImage');
// const pokemonEntry = document.getElementById('pokemonEntry');
// const hpStat = document.getElementById('hpStat');
// const atkStat = document.getElementById('atkStat');
// const defStat = document.getElementById('defStat');
// const satkStat = document.getElementById('satkStat');
// const sdefStat = document.getElementById('sdefStat');
// const spdStat = document.getElementById('spdStat');


// buttonSearch.addEventListener('click', insertPokemon);
// buttonSearch.addEventListener('touchstart', insertPokemon);

// function insertPokemon() {
//     fetch(`${urlPokemon}${pokemon.value.toLowerCase()}`)
//         .then(res => {
//             if (res.status === 404) {
//                 alert('This pokémon does not exist. (◞╭╮◟)');
//             } else{
//                 return res.json();
//             }
//         })
//         .then(data => {
//            const pokeImage = document.createElement('img');
//            pokeImage.src = data.sprites.other.dream_world;
//         })
// }

const urlPokemon = 'https://pokeapi.co/api/v2/pokemon/';
const urlSpecies = 'https://pokeapi.co/api/v2/pokemon-species/';

const pokemon = document.getElementById('pokemonSearch');
const buttonSearch = document.getElementById('searchPokemon');
const pokemonName = document.getElementById('pokemonName');
const pokemonImage = document.getElementById('pokemonImage');
const pokemonEntry = document.getElementById('pokemonEntry');
const hpStat = document.getElementById('hpStat');
const atkStat = document.getElementById('atkStat');
const defStat = document.getElementById('defStat');
const satkStat = document.getElementById('satkStat');
const sdefStat = document.getElementById('sdefStat');
const spdStat = document.getElementById('spdStat');

const insertPokemonGeneralInfo = () => {
    fetch(`${urlPokemon}${pokemon.value.toLowerCase()}`)
        .then((res) => {
            if (res.status === 404) {
                placeholderImage("assets/img/buff_pikachu.png")
                pokemonName.innerHTML = "(◞╭╮◟)";
                hpStat.innerHTML = 0;
                atkStat.innerHTML = 0;
                defStat.innerHTML = 0;
                satkStat.innerHTML = 0;
                sdefStat.innerHTML = 0;
                spdStat.innerHTML = 0;
                pokemonEntry.innerHTML = "There's nothing to say about this pokémon because it doesn't exist."
                alert('This pokémon does not exist. (◞╭╮◟)');
            } else {
                return res.json();
            }
        })
        .then((data) => {
            pokemonName.innerHTML = data.name[0].toUpperCase() + data.name.substring(1, data.name.length + 1);
            pokemonImage.src = data.sprites.other.dream_world.front_default;
            hpStat.innerHTML = data.stats[0].base_stat;
            atkStat.innerHTML = data.stats[1].base_stat;
            defStat.innerHTML = data.stats[2].base_stat;
            satkStat.innerHTML = data.stats[3].base_stat;
            sdefStat.innerHTML = data.stats[4].base_stat;
            spdStat.innerHTML = data.stats[5].base_stat;
        })
};

const placeholderImage = (url) => {
    const pokePhoto = document.getElementById("pokemonImage");
    pokePhoto.src = url;
}

function randomNumber() {
    return Math.floor(Math.random() * 135);
}

const randInt = randomNumber();

const insertPokemonDescription = () => {
    fetch(`${urlSpecies}${pokemon.value.toLowerCase()}`)
        .then((res) => res.json())
        .then((data) => {
            if (data.flavor_text_entries[randInt].language.name === "en"){
                pokemonEntry.innerHTML = data.flavor_text_entries[randInt].flavor_text;
            } else {
                pokemonEntry.innerHTML = data.flavor_text_entries[0].flavor_text;
            }
        })
};


buttonSearch.addEventListener('click', insertPokemonGeneralInfo);
buttonSearch.addEventListener('touchstart', insertPokemonGeneralInfo);
buttonSearch.addEventListener('click', insertPokemonDescription);
buttonSearch.addEventListener('touchstart', insertPokemonDescription);