import { useState, useEffect } from "react";
//SERVICES
import ApiFetch from "../services/ApiFetch.js";
//COMPONENTS
import CharacterList from "./CharacterList.js";
//STYLESHEETS
import "../stylesheets/App.scss";

const App = () => {
  //ESTADOS
  const [characters, setCharacters] = useState([]);

  //FETCH
  useEffect(() => {
    ApiFetch().then((character) => {
      setCharacters(character);
    });
  }, []);
  console.log(characters);
  return <CharacterList />;
};

export default App;
