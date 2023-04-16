import React, {useState} from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({pokemon}) {
  const [isFlipped, setIsFlipped] = useState(false);

  function handleClickCard(){
    setIsFlipped(!isFlipped);
  }

  return (
    <Card onClick={handleClickCard}>
      <div>
        <div className="image">
          <img src={isFlipped ? pokemon.sprites.front : pokemon.sprites.back} alt={`${pokemon.name}`}/>
        </div>
        <div className="content">
          <div className="header">{pokemon.name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {pokemon.hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
