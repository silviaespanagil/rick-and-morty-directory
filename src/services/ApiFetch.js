const urlFetch = "https://rickandmortyapi.com/api/character";

const ApiFetch = () => {
  return fetch(urlFetch)
    .then((response) => response.json())
    .then((data) => {
      const cleanData = data.results.map((character) => {
        console.log(character);
        return {
          id: character.id,
          name: character.name,
          status: character.status,
          specie: character.species,
          origin: character.origin.name,
        };
      });
      return cleanData;
    });
};

export default ApiFetch;
