import PropTypes from "prop-types";

const FilterBySpecies = (props) => {
  const handleSpecie = (ev) => {
    props.handleFilter({ specieValue: ev.target.value, key: "specie" });
  };

  return (
    <>
      <label htmlFor="filterSpecies" className="filter__form--species">
        Specie
      </label>
      <select
        id="filterSpecies"
        className="filter__form--select"
        name="filterSpecies"
        onChange={handleSpecie}
      >
        <option value="All">All</option>
        <option value="Alien">Alien</option>
        <option value="Human">Human</option>
      </select>
    </>
  );
};

export default FilterBySpecies;

FilterBySpecies.propTypes = {
  handleFilter: PropTypes.func,
};
