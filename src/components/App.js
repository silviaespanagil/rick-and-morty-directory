import { useState, useEffect } from "react";
//SERVICES
 import ApiFetch from "../services/ApiFetch.js";
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
  return <p>Hola mundo</p>;
};

export default App;
