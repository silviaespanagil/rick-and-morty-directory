//COMPONENTES
import CharacterCard from "./CharacterCard.js";

const CharacterList = (props) => {
  const character = props.characters.map((character) => {
    return (
      <li key={character.id}>
        <CharacterCard
          image={character.image}
          name={character.name}
          species={character.species}
        />
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
