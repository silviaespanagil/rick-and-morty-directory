const urlFetch = "https://rickandmortyapi.com/api/character";

const ApiFetch = () => {
  return fetch(urlFetch)
    .then((response) => response.json())
    .then((data) => {
      const cleanData = data.results.map((character) => {
        return {
          name: character.name,
          status: character.status,
          specie: character.species,
          origin: character.origin.name,
        };
      });
      return console.log(cleanData);
    });
};

export default ApiFetch;
