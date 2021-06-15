import { useState, useEffect } from "react";
//SERVICES
import ApiFetch from "../services/ApiFetch.js";
import ls from "../services/LocalStorage.js";
//COMPONENTS
import CharacterList from "./CharacterList.js";
import FilterByName from "./FilterByName.js";
//STYLESHEETS
import "../stylesheets/App.scss";

const App = () => {
  const localCharacter = ls.get("character", []);
  //ESTADOS
  const [characters, setCharacters] = useState(localCharacter);

  //FETCH
  useEffect(() => {
    if (localCharacter.length === 0) {
      ApiFetch().then((character) => {
        setCharacters(character);
      });
    }
  }, [localCharacter]);

  //LOCAL STORAGE
  useEffect(() => {
    ls.set("character", characters);
  });

  return (
    <>
      <FilterByName />
      <CharacterList characters={characters} />
    </>
  );
};

export default App;
