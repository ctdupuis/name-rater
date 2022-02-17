import './App.css';
import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import Header from './components/Static/Header';
import Home from './components/Static/Home';
import Signup from './components/Forms/Signup';
import Login from './components/Forms/Login';

import { authStatus } from './actions/user_actions';

function App({ currentUser, alert, loading, authStatus }) {

  const [pokemon, setPokemon] = useState([]);
  const [fetchName, setFetchName] = useState(false);
  const [currentPokemon, setCurrentPokemon] = useState({});

  useEffect(() => {
    authStatus();
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
        <img src={currentPokemon["sprites"]["other"]["official-artwork"]["front_default"]} alt={currentPokemon.name} />
      </div>
      :
      null

  const options = pokemon.map((p, i) => <option key={i} value={p.name}>{p.name}</option>)

  const handleSelect = e => {
    setFetchName(e.target.value);
  }

  return (
    <div className="App">
      <Header currentUser={currentUser} />
      <Routes>
        <Route exact path={"/"} element={<Home />} />

        <Route exact path={"/signup"} element={<Signup currentUser={currentUser} />} />

        <Route exact path={"/login"} element={<Login />} />
      </Routes>
      <label>Choose a Pokemon</label>
      <select onChange={handleSelect}>
        <option>Choose a Pokemon</option>
        {options}
      </select>

    <span>Currently selected: {pokemonCard} </span>
      
    </div>
  );
}

// export default App;
export default connect(
  state => ({
    currentUser: state.userReducer.currentUser,
    alert: state.alertReducer.alert,
    loading: state.loadReducer.loading
  }),
  {
    authStatus
  }
)(App)