import Pokedex from 'pokedex-promise-v2';
import './App.css';
import { useEffect, useState } from 'react';


function App() {
  const p = new Pokedex();

  const [pokemon, setPokemon] = useState([]);
  const [currentPokemon, setCurrentPokemon] = useState("bulbasaur");

  useEffect(() => {
    fetchAllPokemon();
  }, [])

  useEffect(() => {
    fetchPokemon(currentPokemon)
  }, [])

  const fetchAllPokemon = async(query="https://pokeapi.co/api/v2/pokemon?limit=1118") => {
    const response = await fetch(query);
    const json = await response.json();
    const pokemon = json.results;
    setPokemon(pokemon);
  }

  const fetchPokemon = async(name) => {
    // const query = `https://pokeapi.co/api/v2/pokemon/${name}`
    const pokemon = await p.getPokemonSpeciesByName(name)
    console.log(pokemon)
    // const response = await fetch(query);
    // const json = await response.json()
    // setCurrentPokemon(json);
    // console.log("from UseEffect fetchPokemon", json)
  }

  const pokemonCard =
      <div>
        {currentPokemon}
      </div>

  const options = pokemon.map((p, i) => <option key={i} value={p.name}>{p.name}</option>)

  const handleSelect = e => {
    // fetch(`https://pokeapi.co/v2/pokemon/${e.target.value}`)
    // .then(res => res.json())
    // .then(json => setCurrentPokemon(json))
    setCurrentPokemon(e.target.value)
  }

  return (
    <div className="App">
      <label>Choose a Pokemon</label>
      <select onChange={handleSelect}>
        {options}
      </select>

    <span>Currently selected: {pokemonCard} </span>
      
    </div>
  );
}

export default App;
