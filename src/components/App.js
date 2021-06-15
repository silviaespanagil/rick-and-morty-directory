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
  const [FilterName, setFilterByName] = useState("");

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

  //HANDLE FILTER
  const handleFilter = (characterData) => {
    if (characterData.key === "name") {
      setFilterByName(characterData.searchValue);
    }
  };

  //RENDER FILTER
  const renderFilter = characters.filter((character) => {
    return character.name.toUpperCase().includes(FilterName.toUpperCase());
  });

  return (
    <>
      <FilterByName handleFilter={handleFilter} />
      <CharacterList characters={renderFilter} />
    </>
  );
};

export default App;
