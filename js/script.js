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
    pokemonName.innerHTML = data.name;
    pokemonNumber.innerHTML = data.id;
    //caminho para a imgem
    pokemonImage.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default'];

    input.value = '';
    } else {
        pokemonName.innerHTML = 'não encontrado :('
    }
}


form.addEventListener('submit', (event) =>{
    event.preventDefault();

    renderPokemon(input.value.searchPokemon);

});


btNext.addEventListener('click', () =>{
    alert('Next clicked')
});

btPrev.addEventListener('click', () =>{
    alert('Prev clicked')
});

renderPokemon('1');