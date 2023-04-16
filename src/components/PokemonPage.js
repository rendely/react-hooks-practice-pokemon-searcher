import React, {useEffect, useState} from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [allPokemon, setAllPokemon] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(getAllPokemon, []);

  function getAllPokemon(){
    fetch('http://localhost:3001/pokemon')
      .then(r=>r.json())
      .then(allPokemon => setAllPokemon(allPokemon))
  }

  const displayedPokemon = allPokemon.filter(pokemon =>
    pokemon.name.toLowerCase().match(search)
    )

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm />
      <br />
      <Search search={search} setSearch={setSearch}/>
      <br />
      <PokemonCollection 
        allPokemon={displayedPokemon}
      />
    </Container>
  );
}

export default PokemonPage;
