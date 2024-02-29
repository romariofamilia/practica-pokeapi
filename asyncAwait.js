const container = document.querySelector('#container');
const img = document.querySelector('.pokemon_img');
const pokemonName = document.querySelector('.pokemon_name');
const pokemonCaption = document.querySelector('.pokemon_caption');
const pokemonStats = document.querySelector('.stats')

const buscador = document.querySelector('#buscador');
const button = document.querySelector('#button')
let p;
async function getPokemon(pokemon) {
  let formatoName = pokemon.toLowerCase();
  try {
    const request = await fetch(`https://pokeapi.co/api/v2/pokemon/${formatoName}`);
    const response = await request.json();
    console.log(response);


    img.setAttribute('src', `${response["sprites"]["other"]["dream_world"]["front_default"]}`)
    pokemonName.textContent = response["name"]
    console.log(response["types"][0]["type"]["name"]);
    pokemonCaption.innerHTML = `<span>${response["types"][0]["type"]["name"]}</span>`

    
      for(let i = 0; i < response["stats"].length; i++) {
        p = document.createElement('p');
        p.setAttribute('class', `${i}`);
        p.textContent = response["stats"][i]["stat"]["name"] + " : " + response["stats"][i]["base_stat"];
        pokemonStats.appendChild(p)
        console.log(p);
      }
    
    
    
  }
  catch(err) {
    console.log(err);
  }

  

}


const pokemonContainer = document.querySelector('.pokemon_container')
button.addEventListener('click', (e) => {
  e.preventDefault();
  getPokemon(buscador.value)
  container.append(pokemonContainer)
})

const limpiarButton = document.querySelector('#limpiar');
limpiarButton.addEventListener('click', (e) => {
  e.preventDefault();
  pokemonContainer.remove()
})

