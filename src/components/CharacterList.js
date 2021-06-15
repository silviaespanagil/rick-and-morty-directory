import { Link } from "react-router-dom";
//COMPONENTES
import CharacterCard from "./CharacterCard.js";

const CharacterList = (props) => {
  const character = props.characters.map((character) => {
    return (
      <li key={character.id}>
        <Link to={`/character/${character.id}`}>
          <CharacterCard
            image={character.image}
            name={character.name}
            species={character.species}
          />
        </Link>
      </li>
    );
  });

  return (
    <>
      <ul>{character}</ul>
    </>
  );
};

export default CharacterList;
