import React, {useEffect, useState} from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [allPokemon, setAllPokemon] = useState([]);

  useEffect(getAllPokemon, []);

  function getAllPokemon(){
    fetch('http://localhost:3001/pokemon')
      .then(r=>r.json())
      .then(allPokemon => setAllPokemon(allPokemon))
  }

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm />
      <br />
      <Search />
      <br />
      <PokemonCollection 
        allPokemon={allPokemon}
      />
    </Container>
  );
}

export default PokemonPage;
