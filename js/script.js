const pokemonName = document.querySelector('.pokemon__name');
const pokemonNumber = document.querySelector('.pokemon__number');
const pokemonImage = document.querySelector('.pokemon__image');

const form = document.querySelector('.form');
const input = document.querySelector('.input__search');

//botões de passar o pokemon
const btNext = document.querySelector('.btn-next');
const btPrev = document.querySelector('.btn-prev');

let searchPokemon = 1;

const fetchPokemon = async (pokemon) => {

const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    
     if (APIResponse.status == 200){

    const data = await APIResponse.json();
    return data;
}
}

const renderPokemon = async (pokemon) => {

    pokemonName.innerHTML = 'carregando ...';
    pokemonNumber.innerHTML = '';

    const data = await fetchPokemon(pokemon);

    if (data){
    pokemonImage.style.display = 'block';    
    pokemonName.innerHTML = data.name;
    pokemonNumber.innerHTML = data.id;
    //caminho para a imgem
    pokemonImage.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default'];

    input.value = '';
    } else {
        pokemonImage.style.display = 'none';
        pokemonName.innerHTML = 'não encontrado :('
        pokemonNumber.innerHTML = '';
    }
}


form.addEventListener('submit', (event) =>{
    event.preventDefault();

    renderPokemon(input.value.toLowerCase());

});

btPrev.addEventListener('click', () =>{
    if (searchPokemon > 1) {
        searchPokemon -= 1;
         renderPokemon(searchPokemon);
    }
});


btNext.addEventListener('click', () =>{
    searchPokemon += 1;
     renderPokemon(searchPokemon);
    });

renderPokemon(searchPokemon);