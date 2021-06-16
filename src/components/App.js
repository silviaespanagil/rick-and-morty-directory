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
import FilterByName from "./FilterByName.js";
import FilterBySpecies from "./FilterBySpecies.js";
import Reset from "./Reset.js";
//STYLESHEETS
import "../stylesheets/App.scss";

const App = () => {
  const localCharacter = ls.get("character", []);
  const localSearch = ls.get("filter", "");

  //ESTADOS
  const [characters, setCharacters] = useState(localCharacter);
  const [FilterName, setFilterByName] = useState(localSearch);

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
    ls.set("filter", FilterName);
  });

  //HANDLER FUNCTIONS

  //Filter

  const handleFilter = (characterData) => {
    if (characterData.key === "name") {
      setFilterByName(characterData.searchValue);
    }
  };

  //Reset
  const handleReset = () => {
    setFilterByName("");
  };

  //RENDER FUNCTIONS

  //Filter
  const renderFilter = characters.filter((character) => {
    return character.name.toUpperCase().includes(FilterName.toUpperCase());
  });

  console.log(FilterName);
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
            <FilterByName handleFilter={handleFilter} lsFilter={FilterName} />
            <FilterBySpecies />
          </div>
          <CharacterList filterName={FilterName} characters={renderFilter} />
        </Route>
        <Route path="/character/:id" render={renderCharacterDetail} />
      </Switch>
    </>
  );
};

export default App;
