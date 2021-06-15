//COMPONENTES
import CharacterCard from "./CharacterCard.js";

const CharacterList = (props) => {
  const character = props.characters.map((character) => {
    return (
      <li>
        <CharacterCard name={character.name} />
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
