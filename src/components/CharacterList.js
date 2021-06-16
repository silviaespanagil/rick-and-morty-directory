import PropTypes from "prop-types";
import { Link } from "react-router-dom";
//COMPONENTES
import CharacterCard from "./CharacterCard.js";
import NoResults from "./NoResults.js";

const CharacterList = (props) => {
  if (props.characters.length === 0) {
    return <NoResults filterName={props.filterName} />;
  }
  const character = props.characters.map((character) => {
    return (
      <li className="character__li" key={character.id}>
        <Link to={`/character/${character.id}`}>
          <CharacterCard
            image={character.image}
            name={character.name}
            species={character.species}
            status={character.status}
          />
        </Link>
      </li>
    );
  });

  return (
    <>
      <ul className="character">{character}</ul>
    </>
  );
};

export default CharacterList;

CharacterList.propTypes = {
  characters: PropTypes.array,
  filterName: PropTypes.string,
};
