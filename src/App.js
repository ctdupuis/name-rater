import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const [pokemon, setPokemon] = useState([]);
  const [fetchName, setFetchName] = useState(false);
  const [currentPokemon, setCurrentPokemon] = useState({});

  useEffect(() => {
    fetchAllPokemon();
  }, [])

  useEffect(() => {
    fetchName ? fetchPokemon(fetchName) : console.log("No Name to fetch yet")
  }, [fetchName])

  const fetchAllPokemon = async(query="https://pokeapi.co/api/v2/pokemon?limit=1118") => {
    const response = await fetch(query);
    const json = await response.json();
    const pokemon = json.results;
    setPokemon(pokemon);
  }

  const fetchPokemon = async(name) => {
    const query = `https://pokeapi.co/api/v2/pokemon/${name}`
    const response = await fetch(query);
    const json = await response.json()
    setCurrentPokemon(json);
  }

  const pokemonCard = currentPokemon.name ?
      <div>
        {currentPokemon.name}
        <img src={currentPokemon["sprites"]["other"]["official-artwork"]["front_default"]} alt={currentPokemon.name} />
      </div>
      :
      <div>Loading...</div>

  const options = pokemon.map((p, i) => <option key={i} value={p.name}>{p.name}</option>)

  const handleSelect = e => {
    // fetch(`https://pokeapi.co/v2/pokemon/${e.target.value}`)
    // .then(res => res.json())
    // .then(json => setCurrentPokemon(json))
    setFetchName(e.target.value)
  }

  return (
    <div className="App">
      <label>Choose a Pokemon</label>
      <select onChange={handleSelect}>
        <option>Choose a Pokemon</option>
        {options}
      </select>

    <span>Currently selected: {pokemonCard} </span>
      
    </div>
  );
}

export default App;
