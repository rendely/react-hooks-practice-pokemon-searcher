import React from "react";
import PokemonPage from "./PokemonPage";

/* Component hierarchy 

App
|––PokemonPage (allPokemon, displayedPokemon, searchTerm)
    |––Container
    |––PokemonForm (newPokemon)
    |––Search 
    |––PokemonCollection 
        |––PokemonCard (pokemon)

*/

function App() {
  return (
    <div className="App">
      <PokemonPage />
    </div>
  );
}

export default App;
