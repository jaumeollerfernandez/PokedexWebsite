import "./App.css";
import { PokemonCard } from "./components/pokemoncard";
import "bootstrap/dist/css/bootstrap.css";
import { PokeNavBar } from './components/NavBar/Pokenavbar'

function App() {
  function reproducePokemons(pNumber) {
    var pokemons = [];
    for (let i = 1; i <= pNumber; i++) {
      pokemons.push(<PokemonCard number={i} />);
    }
    return pokemons;
  }
  return (
    <div>
      <div className="row">
        <div className="col">
          <PokeNavBar />
        </div>
      </div>
      <div className="container d-flex flex-wrap align-items-center">
        {reproducePokemons(10)}
      </div>
    </div>
  );
}

export default App;
