import { useState, useEffect } from "react";
//SERVICES
import ApiFetch from "../services/ApiFetch.js";
import ls from "../services/LocalStorage.js";
//COMPONENTS
import CharacterList from "./CharacterList.js";
//STYLESHEETS
import "../stylesheets/App.scss";

const App = () => {
  const localCharacter = ls.get("character", []);
  //ESTADOS
  const [characters, setCharacters] = useState([]);

  //FETCH
  useEffect(() => {
    ApiFetch().then((character) => {
      setCharacters(character);
    });
  }, []);

  //LOCAL STORAGE
  useEffect(() => {
    ls.set("character", characters);
  });

  return <CharacterList characters={characters} />;
};

export default App;
