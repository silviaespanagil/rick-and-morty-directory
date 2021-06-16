import { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
//SERVICES
import ApiFetch from "../services/ApiFetch.js";
import ls from "../services/LocalStorage.js";
//IMAGES
import logo from "../images/RickAndMorty.png";
//COMPONENTS
import CharacterList from "./CharacterList.js";
import CharacterDetail from "./CharacterDetail.js";
import NoCharacterDetail from "./NoCharacterDetail.js";
import Filters from "./Filters.js";
import Reset from "./Reset.js";
//STYLESHEETS
import "../stylesheets/App.scss";

const App = () => {
  const localCharacter = ls.get("character", []);
  const localSearchName = ls.get("Filter name:", "");
  const localSearchSpecie = ls.get("Filter specie:", "All");

  //ESTADOS
  const [characters, setCharacters] = useState(localCharacter);
  const [FilterName, setFilterByName] = useState(localSearchName);
  const [FilterSpecie, setFilterSpecie] = useState(localSearchSpecie);

  //FETCH

  useEffect(() => {
    if (localCharacter.length === 0) {
      ApiFetch().then((character) => {
        const orderCharacter = character.sort((a, b) =>
          a.name > b.name ? 1 : a.name < b.name ? -1 : 0
        );
        setCharacters(orderCharacter);
      });
    }
  }, [localCharacter]);

  //LOCAL STORAGE

  useEffect(() => {
    ls.set("character", characters);
    ls.set("Filter name:", FilterName);
    ls.set("Filter specie;", FilterSpecie);
  });

  //HANDLER FUNCTIONS

  //Filter

  const handleFilter = (characterData) => {
    if (characterData.key === "name") {
      setFilterByName(characterData.searchValue);
    } else if (characterData.key === "specie") {
      setFilterSpecie(characterData.specieValue);
    }
  };

  //Reset
  const handleReset = () => {
    setFilterByName("");
  };

  //RENDER FUNCTIONS

  //Filter
  const renderFilter = characters
    .filter((character) => {
      return character.name.toUpperCase().includes(FilterName.toUpperCase());
    })
    .filter((character) => {
      if (FilterSpecie === "All") {
        return true;
      } else {
        return character.species === FilterSpecie;
      }
    });

  //Detail

  const renderCharacterDetail = (routerProps) => {
    const routerId = routerProps.match.params.id;
    const characterFound = characters.find(
      (character) => character.id === parseInt(routerId)
    );
    if (characterFound) {
      console.log(characterFound);
      return <CharacterDetail character={characterFound} />;
    } else {
      return <NoCharacterDetail />;
    }
  };

  return (
    <>
      <div className="logo">
        <img className="logo__img" src={logo} alt="Rick and Morty" />
      </div>
      <Switch>
        <Route exact path="/">
          <div className="filter">
            <Reset reset={handleReset} />
            <Filters handleFilter={handleFilter} lsFilter={FilterName} />
          </div>
          <CharacterList filterName={FilterName} characters={renderFilter} />
        </Route>
        <Route path="/character/:id" render={renderCharacterDetail} />
      </Switch>
    </>
  );
};

export default App;
