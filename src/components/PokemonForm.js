import React, {useState} from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({onAddPokemon}) {

  const [newPokemon, setNewPokemon] = useState({
    name:'',
    hp:'',
    frontUrl:'' ,
    backUrl: ''
  })

  function handleSubmit(e){
    e.preventDefault();
    const newPokemonPayload = {
      "name": newPokemon.name,
      "hp":  newPokemon.hp,
      "sprites": {
        "front":  newPokemon.frontUrl,
        "back": newPokemon.backUrl
      }
    }
    onAddPokemon(newPokemonPayload);
  }

  function handleChange(e){
    setNewPokemon({...newPokemon, [e.target.name]: e.target.value});
  }

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group widths="equal">
          <Form.Input fluid label="Name" placeholder="Name" name="name" onChange={handleChange} />
          <Form.Input fluid label="hp" placeholder="hp" name="hp" onChange={handleChange}/>
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            onChange={handleChange}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
