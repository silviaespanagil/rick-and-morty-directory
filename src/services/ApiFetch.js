const urlFetch = "https://rickandmortyapi.com/api/character";

const ApiFetch = () => {
  return fetch(urlFetch)
    .then((response) => response.json())
    .then((data) => {
      const cleanData = data.results.map((character) => {
        return {
          id: parseInt(character.id),
          image: character.image,
          name: character.name,
          status: character.status,
          species: character.species,
          origin: character.origin.name,
        };
      });

      return cleanData;
    });
};

export default ApiFetch;
