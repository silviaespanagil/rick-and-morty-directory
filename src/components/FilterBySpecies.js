const FilterBySpecies = (props) => {
  const handleSpecie = (ev) => {
    props.handleFilter({ specieValue: ev.target.value, key: "specie" });
  };

  return (
    <>
      <label htmlFor="filterSpecies">Specie</label>
      <select id="filterSpecies" name="filterSpecies" onChange={handleSpecie}>
        <option value="All">All</option>
        <option value="Alien">Alien</option>
        <option value="Human">Human</option>
      </select>
    </>
  );
};

export default FilterBySpecies;
