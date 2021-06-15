const urlFetch = "https://rickandmortyapi.com/api/character";

const ApiFetch = () => {
  return fetch(urlFetch)
    .then((response) => response.json())
    .then((data) => {
      const cleanData = data.results.map((character) => {
        return {
          character,
        };
      });
      return cleanData;
    });
};

export default ApiFetch;
